# Trading Education Platform

> A full-stack trading education landing page — built with React 19, Vite, and an Express + PostgreSQL backend.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Backend-4169E1?logo=postgresql)](https://www.postgresql.org)

---

## Overview

Trading Education Platform is a modern, component-driven landing page for a trading education service. It features a rich set of marketing sections — hero, course experience, live trading showcase, pricing, community, and more — all styled with custom CSS and backed by a lightweight Express API connected to PostgreSQL.

---

## Features

- **Hero Section** — Eye-catching headline and call-to-action
- **How It Works** — Step-by-step onboarding flow visualization
- **Course Experience** — Detailed breakdown of the curriculum
- **Live Trading** — Showcase of live trading sessions and tools
- **Trading Chart** — Interactive or animated trading chart component
- **Dashboard Preview** — Preview of the student trading dashboard
- **Philosophy** — Brand philosophy and values section
- **Founder** — Founder story and credibility section
- **Pricing** — Tiered pricing plans display
- **Community** — Community and testimonials section
- **Trust** — Trust signals, logos, and social proof
- **Footer CTA** — Final call-to-action

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite 8, custom CSS |
| **Backend** | Node.js, Express 5, PostgreSQL (`pg`) |
| **Environment** | dotenv |
| **CORS** | cors middleware |

---

## Project Structure

```
trading-education-platform/
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/         # Page section components
│   │   │   ├── Hero.jsx / Hero.css
│   │   │   ├── HowItWorks.jsx / HowItWorks.css
│   │   │   ├── CourseExperience.jsx / CourseExperience.css
│   │   │   ├── LiveTrading.jsx / LiveTrading.css
│   │   │   ├── TradingChart.jsx / TradingChart.css
│   │   │   ├── DashboardPreview.jsx / DashboardPreview.css
│   │   │   ├── Philosophy.jsx / Philosophy.css
│   │   │   ├── Founder.jsx / Founder.css
│   │   │   ├── Pricing.jsx / Pricing.css
│   │   │   ├── Community.jsx / Community.css
│   │   │   ├── Trust.jsx / Trust.css
│   │   │   └── FooterCTA.jsx / FooterCTA.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── server/                     # Express + PostgreSQL backend
    ├── index.js                # API server entry point
        ├── db.js                   # PostgreSQL connection
            ├── schema.sql              # Database schema
                └── package.json
                ```

                ---

                ## Getting Started

                ### Prerequisites

                - Node.js >= 18
                - PostgreSQL database

                ### Installation

                1. **Clone the repository**

                ```bash
                git clone https://github.com/toutoumerch-lab/trading-education-platform.git
                cd trading-education-platform
                ```

                2. **Install client dependencies**

                ```bash
                cd client && npm install
                ```

                3. **Install server dependencies**

                ```bash
                cd ../server && npm install
                ```

                4. **Configure environment variables**

                Create a `.env` file in the `server/` directory:

                ```env
                DATABASE_URL=postgresql://user:password@localhost:5432/trading_edu
                PORT=3001
                ```

                5. **Initialize the database**

                ```bash
                psql -d your_database -f server/schema.sql
                ```

                6. **Start the development servers**

                ```bash
                # Start backend
                cd server && node index.js

                # Start frontend (new terminal)
                cd client && npm run dev
                ```

                The client will be available at `http://localhost:5173` and the API at `http://localhost:3001`.

                ---

                ## Available Scripts (Client)

                | Command | Description |
                |---------|-------------|
                | `npm run dev` | Start the Vite development server |
                | `npm run build` | Build for production |
                | `npm run preview` | Preview the production build |
                | `npm run lint` | Lint source files |

                ---

                ## License

                This project is licensed under the [MIT License](LICENSE).

                ---

                ## Author

                **toutoumerch-lab** — educating the next generation of traders.
