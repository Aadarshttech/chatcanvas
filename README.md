# ChatCanvas

Interactive design studio and live showroom for customizable, production-ready AI chatbot interfaces.

Live Demo: [chatcanvas-theta.vercel.app](https://chatcanvas-theta.vercel.app/)

---

## Overview

ChatCanvas provides an interactive workbench for previewing, testing, and exporting production-ready chatbot widget interfaces. Built for designers and engineers, it renders real-world hardware contexts across desktop, tablet, and mobile displays with zero placeholder assets, seamless dark/light modes, and instant code generation for Framer and React applications.

---

## Key Features

- **Multi-Device Hardware Environments**: Test responsive layouts and interaction models in high-fidelity mockups:
  - **iMac Desktop**: Full macOS window chrome with themed wallpapers, dynamic search bars, and desktop dock.
  - **iPad Pro**: Landscape widescreen canvas with native status bar and floating dock.
  - **iPhone Mobile**: Authentic mobile enclosure with home screen launcher, app icon integration, and full-height chat flow.
- **Production Theme Systems**:
  - **Professional**: Slate and obsidian minimalist design system tailored for enterprise support.
  - **Chocolate**: Warm cocoa tones with serif typography suited for luxury retail and hospitality.
  - **Hisabify**: Clean botanical emerald theme built for financial and fintech applications.
  - **Strawberry**: Soft pastel palette with rounded typography for creator and lifestyle brands.
- **Component Code Export**: Copy ready-to-use `<ChatWidget />` component code and Framer embed snippets with a single click.
- **Conversation Simulation Engine**: Live test proactive greeting triggers, quick reply action trees, bot latency simulation, sound effects, and typing indicators.
- **Adaptive Appearance**: First-class dark and light mode implementations across every theme, container, and hardware chrome.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

---

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aadarshttech/chatcanvas.git
   cd chatcanvas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── public/                 # Static assets, branding, and theme decor
├── src/
│   ├── app/                # Next.js App Router (layout, page, metadata)
│   ├── components/
│   │   ├── showroom/       # Studio canvas, navigation, device mockups, export modal
│   │   └── widget/         # Interactive ChatWidget core components
│   ├── data/
│   │   ├── mockMessages.ts # Simulation conversation sequences
│   │   └── themes.ts       # Design tokens, color schemes, and theme definitions
│   └── types/
│       └── chat.ts         # TypeScript interfaces and type definitions
├── package.json
└── tsconfig.json
```

---

## Production Build

To generate an optimized production bundle:

```bash
npm run build
npm run start
```

---

## License

This project is licensed under the MIT License.
