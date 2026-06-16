# Excel Hauling LLC — Demo Website

A professional, front-end-only marketing/portfolio site for **Excel Hauling LLC**,
built with **React + Vite**. No backend required — perfect for sharing a live demo.

## Run it locally

You need [Node.js](https://nodejs.org) (v18 or newer) installed.

```bash
# 1. install dependencies
npm install

# 2. start the dev server
npm run dev
```

Then open the URL it prints (usually **http://localhost:5173**).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

You can deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static host.

## Where to edit content

Almost everything (company info, services, stats, specs, coverage, testimonials)
lives in one file:

```
src/components/content.js
```

Update the client's real details there and the whole site updates.

### Real data already wired in
- Company: **Excel Hauling LLC**
- MC Number: **1633202**
- Phone: **267-678-8860**
- Equipment: **26 ft Box Truck**

> ⚠️ **Placeholders to replace before going live:** the stat figures
> (on-time %, loads delivered, etc.), the customer testimonials, and the
> email address are demo content. Swap in the client's real numbers/quotes.

## Project structure

```
excel-hauling/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/favicon.svg
└─ src/
   ├─ main.jsx
   ├─ App.jsx               # assembles all sections
   ├─ index.css             # full design system
   └─ components/
      ├─ content.js         # ← edit company info here
      ├─ icons.jsx          # inline SVG icons
      ├─ Reveal.jsx         # scroll-in animation
      ├─ Header.jsx
      └─ Hero.jsx
```

## Notes
- Fonts load from Google Fonts, so an internet connection gives the intended look.
- Fully responsive (desktop → mobile) with a working mobile menu.
- The contact form is front-end only; on submit it shows a confirmation message.
  Wire it to email/a CRM when you're ready to go live.
