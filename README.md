# ☕ Brewed & Baked — Café & Restaurant Website

A modern, fully responsive café and restaurant website built with **React + Vite + TypeScript**, **Material UI**, and **React Router DOM**.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Library |
| Vite 5 | Build tool & Dev Server |
| TypeScript | Type safety |
| Material UI v5 | Component library & styling |
| React Router DOM v6 | Client-side routing |
| @fontsource | Self-hosted fonts (Playfair Display + Lato) |

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, features, specialties, testimonials, CTA |
| `/menu` | Menu | Full menu with category filter and search |
| `/about` | About | Story, values, timeline, team |
| `/contact` | Contact | Contact form with validation + info cards |
| `/reservations` | Reservations | Full reservation booking form |

## Getting Started

### Prerequisites
- **Node.js** v18+ — [Download here](https://nodejs.org/)
- **npm** v9+ (comes with Node.js)

### Installation

```bash
# Navigate to the project folder
cd cafe-restaurant

# Install all dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Responsive navigation with mobile drawer
│   └── Footer.tsx        # Rich footer with links, hours, social
├── pages/
│   ├── Home.tsx          # Landing page with hero section
│   ├── Menu.tsx          # Menu with filter + search
│   ├── About.tsx         # Story, team, timeline
│   ├── Contact.tsx       # Contact form + info
│   └── Reservations.tsx  # Table booking form
├── theme/
│   └── theme.ts          # MUI custom theme (espresso palette)
├── data/
│   └── menuData.ts       # Menu items and categories data
├── App.tsx               # Routes + layout shell
└── main.tsx              # App entry point
```

## Design Highlights

- **Espresso Brown & Caramel Gold** colour palette
- **Playfair Display** serif headings + **Lato** body text
- Smooth scroll-triggered navbar transparency on home page
- Animated card hover effects
- Fully responsive (mobile, tablet, desktop)
- Dark hero sections with wave SVG dividers
- Form validation on Contact and Reservations pages
