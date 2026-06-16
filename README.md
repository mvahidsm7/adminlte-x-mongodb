# AdminLTE × MongoDB — Next.js Rebuild

A full rebuild of the [AdminLTE v4](https://adminlte.io/) admin dashboard template, re-imagined with the **MongoDB design system** and rebuilt from scratch on **Next.js 16 (App Router)**. The original is a static Bootstrap 5 theme; this project ports every page to a typed, componentized, test-covered React codebase — same page inventory, new visual language, modern stack.

## What this is

AdminLTE ships ~70 demo pages (auth flows, dashboards, forms, tables, mailbox, error pages, UI showcases). This project recreates that entire page set as a Next.js application styled with the MongoDB brand palette (`#00ed64` green, `#001e2b` deep teal) and Plus Jakarta Sans, instead of AdminLTE's stock Bootstrap look.

It was built page-by-page through 8 sequential implementation plans, each one test-driven: write the failing test, implement the page, verify, commit.

## Tech stack

- **Next.js 16** — App Router, route groups for layout isolation (`(auth)` vs `(main)`)
- **React 19** + **TypeScript**
- **Tailwind CSS 3** — MongoDB design tokens via `tailwind.config.ts`
- **TanStack Table v8** — sortable/filterable/paginated data table
- **FullCalendar** — calendar page
- **@hello-pangea/dnd** — drag-and-drop Kanban board
- **Recharts** — dashboard area charts
- **Lucide React** — icon set
- **Jest + React Testing Library** — 223 tests across 44 suites, every page covered

## Pages

| Section | Pages |
|---|---|
| **Dashboard** | Dashboard v1, v2, Analytics |
| **Auth** | Login (+ v2), Register (+ v2), Forgot Password, Lockscreen |
| **Content** | Profile, Settings, Calendar, Chat, FAQ, File Manager, Invoice, Kanban, Pricing, Projects, Maintenance |
| **Forms** | Elements, Layout, Validation, Wizard |
| **Tables** | Simple Table, Data Table (TanStack Table) |
| **Mailbox** | Inbox, Compose, Read |
| **UI Showcase** | General, Icons, Timeline, Widgets |
| **Errors** | 404, 500, root `not-found` |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build     # production build
npm run test      # run the Jest suite
npm run test:watch
npm run lint
```

## Project structure

```
src/
  app/
    (auth)/        # login, register, forgot-password, lockscreen — no sidebar
    (main)/        # everything else — wrapped in the AppShell sidebar/header
  components/
    ui/            # Button, Card, Badge, Input, Select, Avatar, Tabs, Checkbox, Progress...
    layout/         # AppShell, Sidebar, TopHeader
    widgets/        # SmallBox, InfoBox
    charts/         # AreaChart
  lib/
    navigation.ts   # sidebar nav tree
```

Each page lives next to its own `__tests__/page.test.tsx`.

## Design system

Visual language follows MongoDB's brand: `mongo-green` (#00ed64) as the primary accent, `mongo-teal-deep` (#001e2b) for the sidebar, with supporting purple/orange accents for badges and charts. Full token reference in `docs/superpowers/specs/`.

## Status

All 8 implementation plans complete — 71 pages, 223 passing tests, clean production build with zero TypeScript errors.

## Credit

Original design and page inventory: [AdminLTE](https://adminlte.io/). This project is an independent visual/technical rebuild and is not affiliated with or endorsed by AdminLTE or MongoDB.
