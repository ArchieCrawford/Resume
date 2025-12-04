# Archie Portfolio (Next.js + Tailwind)

A sleek, deploy-ready portfolio for **Archie Crawford Jr** with:
- Light/Dark theme toggle
- Accent color picker (Cyan/Violet, Blue/Indigo, Orange/Teal, Pink/Purple)
- Projects, Experience, Skills sections
- Résumé download button
- PDF generation script (Puppeteer) from `/public/resume.html`

## Quick Start

```bash
npm install
npm run generate:pdf   # creates public/Archie_Crawford_Resume.pdf
npm run dev           # http://localhost:3000
```

Drop your Word/PDF files into `/public` if you want to host them directly.

## Deploy

### Vercel
- New Project → Import this repo/folder
- Framework preset: **Next.js**
- Build: `next build`
- Output: `.next`

### Netlify
- Build command: `next build`
- Publish directory: `.next`

## Customize
- Replace placeholder screenshots under `/public/screens`.
- Edit content in `app/page.tsx` (skills, projects, experience).
- Update `/public/resume.html` or swap `resumeLink` to a hosted PDF URL.

## PDF Generation Notes
- `npm run generate:pdf` uses Puppeteer to render `/public/resume.html` into `public/Archie_Crawford_Resume.pdf`.
- Works locally and in CI (Linux). On serverless hosts, generate locally and commit or upload the PDF.

---
© Archie Crawford Jr. Built with Next.js & Tailwind.
