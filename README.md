# CricScore SaaS - Frontend UI

This is a high-fidelity frontend-only implementation of a SaaS Cricket Score Web App, designed with Next.js 14 App Router principles in mind.

## 🚀 Tech Stack

- **Runtime**: React 18+ (Single Page Application simulation)
- **Styling**: Tailwind CSS (Futuristic Dark Theme)
- **Language**: TypeScript
- **Routing**: Client-side routing (simulating App Router)

## 📂 Structure & Architecture

Although this runs as a Client-Side SPA for the preview environment, the codebase is structured to strictly mirror the **Next.js 14 App Router** convention requested:

- `/app`: Contains route segments (`page.tsx`, `layout.tsx`).
- `/components`: Reusable UI components (Server/Client split simulated).
- `/lib`: Constants and Mock Data.

### Key Features
- **Role-Based Dashboard**: Toggle between `SUPER_ADMIN`, `ADMIN`, and `USER` to see different UI elements.
- **Futuristic UI**: Slate-900 background with Cyan/Sky accents.
- **Mock Data**: Static data for Tournaments, Matches, and Teams.

## 🛠 How to Navigate
- Use the **Role Switcher** in the bottom-right corner to change user permissions dynamically.
- Navigate to **Dashboard** to see the role-specific views.
- Check **Pricing** for the subscription UI.

## ⚠️ Note on Next.js Compatibility
This codebase is designed to be easily portable to a real Next.js 14 environment. The `react-router-dom` used here simulates the file-system routing of Next.js. In a real deployment, you would replace the router configuration in `App.tsx` with actual file placements in the `app/` directory.
