# Personal Website

A minimal, responsive personal website built with modern web technologies. Features a clean design with dark mode support, Spotify integration, and YouTube content showcase.

## 🚀 Tech Stack

### Core Technologies
- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Key Libraries
- **Framer Motion** - Animations and transitions
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Type Animation** - Text typing effects

### APIs
- **Spotify Web API** - Real-time "Now Playing" integration
- **YouTube Data API** - Latest video showcase

## 🎯 Features

### Dark Mode
- System-based theme detection
- Manual theme toggle
- Persistent theme preference

### Responsive Design
- Mobile-first approach
- Fluid typography
- Adaptive layouts

### Sections
- **Home** - Introduction and latest content
  - Animated greeting
  - Latest YouTube videos
  - Current Spotify track
- **About** - Professional background and interests
  - Professional life
  - Content creation
  - Side projects
- **Gear** - Equipment and setup showcase
  - Desk Setup, Recording Gear, PC Gear (mirrors Amazon storefront lists)
  - Data lives in `src/data/gear.ts`; update that file when you change your [Amazon lists](https://www.amazon.com/shop/phillipche) (Amazon does not provide an API for storefront lists, so sync is manual)

### Animations
- Page transitions
- Hover effects
- Loading states
- Typing animations

## 🛠 Project Structure 