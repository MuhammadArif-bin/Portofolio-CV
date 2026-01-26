#!/bin/bash
cd "$(dirname "$0")"
echo "Installing dependencies..."
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "Failed to install dependencies"
    exit 1
fi
echo ""
echo "Starting development server..."
echo ""
echo "The website will be available at http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""
npm run dev
