# Hotstar Clone - React UI Assignment

A Netflix/Hotstar-style streaming platform built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Hotstar-like UI Design** - Dark theme with movie posters and hover effects
- **Category-wise Movie Listing** - New Releases and Popular Movies sections
- **Hover Preview** - Shows movie details when hovering over posters
- **Horizontal Scrolling** - Smooth scrolling movie carousels
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Real Movie Data** - Uses TMDB poster images

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:8080
```

## 📱 Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Click "Import" on your repo
4. Vercel will auto-detect settings from `vercel.json`
5. Click "Deploy"

### Option 3: GitHub Integration

1. Push code to GitHub
2. Connect GitHub to Vercel
3. Auto-deploy on every push

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS 3
- **API**: Vercel Serverless Functions
- **Deployment**: Vercel
- **Movie Data**: TMDB images

## 📁 Project Structure

```
├── client/           # React frontend
│   ├── pages/        # Route components
│   └── components/   # UI components
├── api/              # Vercel API routes
├── vercel.json       # Vercel configuration
└── package.json
```

## 🎨 Assignment Requirements ✅

- ✅ Hotstar-like UI design
- ✅ Category-wise movie listing
- ✅ Hover preview functionality
- ✅ Horizontal scrolling
- ✅ Responsive design
- ✅ TMDB integration (images)
- ✅ Clean, modern interface

## 🌐 Live Demo

After deploying to Vercel, your app will be available at:
`https://your-project-name.vercel.app`
