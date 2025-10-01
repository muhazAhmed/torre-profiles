# 🏗️ Torre Profiles

> **Product Engineer Intern Assessment** - A modern web application for searching and exploring professional profiles on Torre.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 🎯 Overview

This project showcases a **modern, responsive web application** built for the Torre Product Engineer Intern technical assessment. It demonstrates seamless integration with Torre APIs to search and display professional profiles with a focus on:

- **Clean, intuitive UI** with glassmorphism design
- **SEO optimization** for better discoverability
- **Analytics integration** for user engagement tracking
- **Performance optimization** with server-side rendering

---

## 🚀 Key Features

### 🔍 **Smart Search System**

#### **SearchBar Component**
- 🎯 Search by **name** or **professional headline**
- ⚡ **Debounced search** with Enter key or button triggers
- 💡 **Smart suggestions** with predefined example usernames
- 🎨 **Smooth animations** powered by Framer Motion

#### **Search API** (`/api/torre/search`)
- 🔄 **Proxy integration** with Torre's search endpoint
- 📊 **Structured responses** handling both single and batch results
- 🎯 **Person-focused** searches (`identityType: "person"`)
- 📦 **Optimized parsing** of newline-delimited JSON responses

#### **Results Display**
- 🖥️ **Responsive grid layout** (adapts from mobile to 5XL screens)
- ⚡ **Server-side rendering** for optimal performance
- 🔄 **Loading states** with animated spinners
- 🎨 **Animated profile cards** with hover effects

### 👤 **Detailed Profile Pages**

#### **Profile API** (`/api/torre/profile/[username]`)
- 🔗 **Direct integration** with Torre's genome/bios endpoint
- 📊 **Complete profile data** retrieval
- ⚡ **Optimized data fetching** with proper error handling

#### **Profile Components**
- 🎭 **ProfileHeader** - Name, picture, and professional headline
- 🔧 **ProfileSkills** - Strengths and expertise visualization
- 🔄 **Loading fallbacks** for smooth user experience

### 🎨 **Modern UI & Design**

#### **Home Page**
- 🌟 **Animated hero section** with compelling call-to-action
- ✨ **Glassmorphism effects** for modern aesthetic
- 🎬 **Framer Motion animations** throughout

#### **Navigation**
- 🧭 **Clean, intuitive navbar** design
- 🔍 **Quick access** to search functionality
- 📱 **Mobile-responsive** layout

### 🔍 **SEO Optimization**

- 📝 **next-seo integration** for comprehensive metadata management
- 🏷️ **Dynamic title templates** (`%s | Torre Profiles`)
- 📱 **OpenGraph & Twitter Card** support
- 🌐 **Page-specific SEO** for profiles and search results
- ⚡ **SSR-optimized** SEO components

### 📊 **Analytics Integration**

- 📈 **Vercel Analytics** for comprehensive tracking
- 👥 **User engagement metrics** and navigation patterns
- 🎯 **Performance insights** and optimization data

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 with App Router |
| **Styling** | Tailwind CSS v4, shadcn/ui components |
| **Animations** | Framer Motion |
| **APIs** | Torre Search & Profile APIs |
| **SEO** | next-seo with OpenGraph support |
| **Analytics** | Vercel Analytics |
| **Fonts** | Inter & JetBrains Mono (Google Fonts) |
| **Theme** | Dark-mode with glassmorphism effects |

---

## 📁 Project Architecture

```
src/
├── 📱 app/
│   ├── 🔌 api/
│   │   └── torre/
│   │       ├── search/route.ts           # 🔍 Search proxy API
│   │       └── profile/[username]/       # 👤 Profile proxy API
│   ├── profile/[username]/page.tsx       # 📄 Dynamic profile pages
│   ├── search/page.tsx                   # 🔍 Search results page
│   └── layout.tsx                        # 🏗️ Root layout (SEO + Analytics)
│
├── 🧩 components/
│   ├── SearchBar.tsx                     # 🔍 Search input component
│   ├── SearchResultCard.tsx              # 🎴 Profile result cards
│   ├── ProfileHeader.tsx                 # 👤 Profile header section
│   ├── ProfileSkills.tsx                 # 🔧 Skills display component
│   ├── LoadingSpinner.tsx                # ⏳ Loading animations
│   └── DefaultSeoWrapper.tsx             # 🔍 SEO wrapper component
│
├── ⚙️ config/
│   └── server.ts                         # 🌐 API endpoint configuration
│
├── 📝 types/
│   └── torre.ts                          # 🏷️ TypeScript definitions
│
└── next-seo.config.ts                    # 🔍 SEO configuration
```

---

## ✅ Completed Features

- [x] 🔍 **Search people** by name & professional headline
- [x] 📋 **Display results** in responsive, animated cards
- [x] 👤 **Full profile pages** with detailed information
- [x] 🔍 **SEO optimization** (default + page-specific)
- [x] 📊 **Analytics integration** for user tracking
- [x] 🎨 **Beautiful dark UI** with glassmorphism & animations
- [x] 📱 **Responsive design** across all device sizes
- [x] ⚡ **Performance optimization** with SSR

---

## 🔮 Future Enhancements

| Priority | Feature | Description |
|----------|---------|-------------|
| 🔥 **High** | Job Search | Implement `/search/jobs` with `identityType: "opportunity"` |
| 🔥 **High** | Skill Visualization | Interactive charts for skill analysis |
| 📈 **Medium** | User Recommendations | "Similar profiles" suggestions |
| 📈 **Medium** | Advanced Filtering | Location, experience level, skills filters |
| 🔧 **Low** | Sitemap Generation | Automated SEO sitemap creation |
| 🔧 **Low** | ISR Caching | Improved performance with Incremental Static Regeneration |

---

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd torre-profiles
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

<div align="center">
  <h3>🏆 Built with passion for the Torre Product Engineer Intern Assessment</h3>
  <p><em>Showcasing modern web development practices and API integration</em></p>
</div>
