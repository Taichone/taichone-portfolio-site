# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server:**
```bash
npm run dev
```
Starts the development server at http://localhost:3000

**Build & Production:**
```bash
npm run build  # Production build
npm start      # Start production server
```

**Code Quality:**
```bash
npm run lint   # ESLint checking
```

## Tech Stack & Architecture

This is a **Next.js 15** portfolio website using the **App Router** with the following key technologies:

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript with strict mode
- **Styling:** Tailwind CSS 4 with custom Apple Design System colors
- **UI Components:** Custom components with Lucide React icons
- **Fonts:** Geist Sans and Geist Mono from next/font/google
- **Theme:** Dark/Light mode support with system preference detection

## Project Structure

**App Router Layout:**
- `app/layout.tsx` - Root layout with theme provider and font configuration
- `app/page.tsx` - Main homepage with all section data
- `app/globals.css` - Global styles with Tailwind and custom CSS properties

**Component Architecture:**
- `components/sections/` - Main page sections (Hero, Experience, Projects, Header, Footer)
- `components/ui/` - Reusable UI components (AppleButton)
- `components/ThemeProvider.tsx` - Custom theme context for dark/light mode
- `components/MainNavigation.tsx` - Navigation component
- `components/utils/` - Utility functions

**Static Assets:**
- `public/images/` - Project images and assets

## Key Implementation Details

**Theme System:**
The app uses a custom ThemeProvider that supports "light", "dark", and "system" modes. Theme state is persisted to localStorage with the key "taichone-theme".

**Data Structure:**
All content data (experiences, projects, social links) is defined directly in `app/page.tsx` as TypeScript arrays with proper type definitions.

**Styling Approach:**
- Uses Tailwind CSS 4 with custom CSS properties for Apple-inspired design
- Custom dark mode variant with `@custom-variant dark (&:is(.dark *))`
- Responsive design with mobile-first approach
- Custom Apple color palette defined in CSS variables

**Component Patterns:**
- All components are properly typed with TypeScript interfaces
- Client components use "use client" directive where needed
- Consistent prop passing and component composition

## Development Notes

- The site is in Japanese (lang="ja") with bilingual content
- Uses suppressHydrationWarning on html element for theme handling
- All external links open in new tabs
- Images are served from public directory and external CDNs for organization logos