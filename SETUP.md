# Setup & Run Instructions

Your portfolio website is now ready to run! Follow these steps:

## ✅ What Was Implemented

I've converted your broken Next.js setup to a fully functional React portfolio with:

- **Fixed page.tsx** - Replaced invalid imports with a complete React portfolio component
- **Modern UI** - Built with Shadcn/ui components and Tailwind CSS
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Portfolio Sections**:
  - Hero section with call-to-action buttons
  - About section with personal info cards
  - Skills section with categorized skills and badges
  - Featured projects showcase
  - Contact section with email and social links
  - Navigation menu (responsive, mobile-friendly)
  - Footer
- **Updated Metadata** - Proper SEO and page titles
- **Favicon** - SVG favicon with portfolio branding

## 🚀 How to Run

### Option 1: Windows Batch Script (Easiest)

1. Double-click `run-dev.bat` in the project folder
2. Wait for "Starting development server..." message
3. Open http://localhost:3000 in your browser

### Option 2: PowerShell

```powershell
cd "c:\Users\SANTOSO\Downloads\modern-portfolio-website"
npm install --legacy-peer-deps
npm run dev
```

### Option 3: Command Prompt

```cmd
cd c:\Users\SANTOSO\Downloads\modern-portfolio-website
npm install --legacy-peer-deps
npm run dev
```

### Option 4: Using pnpm (if you prefer)

```bash
pnpm install
pnpm dev
```

## 🌐 Access the Website

Once the server is running, visit:

- **Local**: http://localhost:3000
- **Mobile/LAN**: http://<your-computer-ip>:3000

## 📝 Next Steps

### Customize Your Content

Edit `app/page.tsx` to update:

1. **Your Name & Description**: Modify the hero section text
2. **Email & Social Links**: Update contact section links
3. **Projects**: Add your actual projects to the `projects` array
4. **Skills**: Update the `skills` object with your technologies

### Example: Change Email

Find this line in `app/page.tsx`:

```tsx
<a href="mailto:your.email@example.com"
```

Replace with:

```tsx
<a href="mailto:your-actual-email@example.com"
```

### Example: Update Projects

Find the `projects` array and modify:

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Your project description",
    tags: ["React", "Node.js"],
    link: "https://your-project-link.com",
  },
  // Add more...
];
```

### Example: Update Skills

Find the `skills` object and add/modify:

```tsx
const skills = {
  Frontend: ["HTML5", "CSS3", "Your Skills Here"],
  Backend: ["Node.js", "Your Skills"],
  Tools: ["Git", "Your Tools"],
};
```

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code for errors
```

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
npm run start
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

If port 3000 is busy, use:

```bash
npm run dev -- -p 3001
```

### Dependencies Installation Issues

Try clearing cache first:

```bash
npm cache clean --force
npm install --legacy-peer-deps
```

### Module Not Found Errors

Delete and reinstall:

```bash
rmdir /s node_modules
del package-lock.json
npm install --legacy-peer-deps
```

## 🎨 Customization Options

### Change Theme Colors

Edit `app/page.tsx` and look for Tailwind color classes like `bg-blue-500`, `text-cyan-400`

Common sections to customize:

- Hero section: `from-blue-400 to-cyan-400`
- Buttons: `from-blue-500 to-cyan-500`
- Badges: `bg-blue-500/20`

### Add More Sections

The layout uses standard React patterns, easy to extend. Add new sections before the footer.

### Use Custom Font

In `app/layout.tsx`, configure different Google fonts

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

---

**Everything is ready!** Just run the start script and your portfolio will be live. 🎉
