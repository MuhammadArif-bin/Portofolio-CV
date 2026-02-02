import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

import { CERTS } from "../../../lib/certificates";

const MAX_BYTES = 10 * 1024 * 1024; // 10MB

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
    if (!Object.prototype.hasOwnProperty.call(CERTS, id)) {
      return NextResponse.json(
        { error: "Unknown certificate id" },
        { status: 400 },
      );
    }

    // If a secret is configured, require it in the request header
    const UPLOAD_SECRET = process.env.UPLOAD_SECRET || "";
    if (UPLOAD_SECRET) {
      const token = req.headers.get("x-upload-token") || "";
      if (!token || token !== UPLOAD_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/pdf")) {
      return NextResponse.json(
        { error: "Only application/pdf allowed" },
        { status: 415 },
      );
    }

    const buf = await req.arrayBuffer();
    if (buf.byteLength === 0)
      return NextResponse.json({ error: "Empty file" }, { status: 400 });
    if (buf.byteLength > MAX_BYTES)
      return NextResponse.json({ error: "File too large" }, { status: 413 });

    const outDir = path.join(process.cwd(), "public", "certificates");
    await fs.mkdir(outDir, { recursive: true });
    const outPath = path.join(outDir, `${id}.pdf`);

    // backup existing file (non-fatal)
    try {
      const stat = await fs.stat(outPath).catch(() => null);
      if (stat && stat.isFile()) {
        const bakName = `${id}.pdf.bak.${Date.now()}`;
        await fs.rename(outPath, path.join(outDir, bakName));
      }
    } catch (e) {
      // ignore backup errors
    }

    await fs.writeFile(outPath, Buffer.from(buf));

    return NextResponse.json({
      ok: true,
      path: `/certificates/${id}.pdf`,
      overwritten: true,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message ?? err) },
      { status: 500 },
    );
  }
}
