# Anand's Portfolio

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

## Overview

This portfolio showcases my projects, skills, and experience as a full-stack developer. It features a sleek design with smooth animations, dark mode support, and a focus on clean, maintainable code.

## Features

- **Modern Design** - Responsive and visually appealing interface
- **Smooth Animations** - Curtain navbar, marquee sections, and scroll effects
- **Project Showcase** - Display of featured projects with descriptions and links
- **Experience & Education** - Detailed work experience and educational background
- **Skills Section** - Organized display of technical skills by category
- **Social Links** - Easy access to GitHub, LinkedIn, and other profiles
- **Dark Mode** - Optional dark theme support
- **SEO Optimized** - Built with Next.js for better search engine visibility

## Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Build Tool**: Vite (for components)
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Anandqwe/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Navigate to `http://localhost:3000` to view the portfolio in your browser.

### Build for Production

```bash
# Create a production build
npm run build

# Start the production server
npm run start
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── resume/            # Resume page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   └── ...
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── navbar.tsx
│       └── ...
├── lib/                   # Utility functions and config
│   ├── config/
│   │   ├── portfolio-data.ts    # Portfolio content
│   │   └── project-data.ts      # Projects list
│   └── utils.ts
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## Customization

### Update Portfolio Content

Edit `lib/config/portfolio-data.ts` to update:
- Personal information
- Tagline and about sections
- Skills (languages, technologies, tools)
- Work experience
- Education
- Social links
- Footer marquee text

### Update Projects

Edit `lib/config/project-data.ts` to add, remove, or modify featured projects.

### Styling

- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind CSS classes in components
- Configure Tailwind in `tailwind.config.js`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Contact

- **Email**: anandkrishna2534@gmail.com
- **GitHub**: [@Anandqwe](https://github.com/Anandqwe)
- **LinkedIn**: [anand-krishna1244](https://linkedin.com/in/anand-krishna1244)
- **Twitter**: [@Anand_1244](https://twitter.com/Anand_1244)

## License

This project is open source and available under the MIT License.
