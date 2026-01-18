<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# doc-check-bot -->

# Doc-Check Bot

A React + Vite application designed to validate and check documentation quality with an intuitive interface.

## Project Overview

Doc-Check Bot is a learning project built to practice React fundamentals, state management, and component architecture. The application provides users with tools to verify documentation compliance and identify potential issues.

## Current Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **State Management**: React Context API
- **Build Tool**: Vite with HMR support

## Features Implemented

- ✅ Component-based UI with Tailwind CSS styling
- ✅ Context-based state management for shared documentation data
- ✅ Protected routing for authenticated workflows
- ✅ localStorage persistence for user sessions
- ✅ Responsive dashboard layout
- ✅ ESLint configuration for code quality

## Development & Setup

```bash
npm install
npm run dev          # Start dev server (localhost:5173)
npm run build        # Production build
npm run lint         # ESLint checks
npm run preview      # Preview production build
```

## Planned Features

- 📋 Document upload and parsing functionality
- 🔍 Real-time validation checklist
- 📊 Documentation compliance reports

## Project Structure

```
src/
├── components/      # Reusable React components
├── contexts/        # Context API providers
├── pages/           # Page components
└── img/             # Static assets
```

## Next Steps

- Implement document validation logic
- Expand UI with additional check types
- Add backend integration for file uploads
- Enhance error handling and user feedback