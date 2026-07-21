# 🚀 Daniel Works - Web3 Portfolio Dashboard

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer)](https://framer.com/motion/)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-6-2535A0?style=flat-square&logo=ethereum)](https://ethers.org/)

A production-ready Web3 developer portfolio built with React, Tailwind CSS, and Framer Motion. Designed to showcase Web3 development skills and attract freelance opportunities, bounties, and contributor roles on platforms like Superteam, Solana, and GitHub.

![Portfolio Preview](https://placehold.co/1200x630/1e293b/00d4aa?text=Web3+Portfolio+Dashboard&font=inter)

## ✨ Features

- **Modern Dark Web3 Theme** - Professional dark UI with accent colors inspired by blockchain technology
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered page transitions and scroll animations
- **React Router** - Multi-page navigation with animated route transitions
- **Project Showcase** - Featured projects with GitHub and live demo links
- **Skills Display** - Animated skill proficiency bars organized by category
- **Statistics Cards** - Key metrics and achievements at a glance
- **Contact Form** - Functional contact form with Formspree integration
- **Performance Optimized** - Code splitting, lazy loading, and optimized build
- **SEO Ready** - Meta tags, semantic HTML, and social sharing support

## 🛠️ Tech Stack

| Category      | Technologies                                    |
| ------------- | ----------------------------------------------- |
| **Frontend**  | React 19, JavaScript (ES6+), Tailwind CSS 3     |
| **Build Tool**| Vite 8                                          |
| **Routing**   | React Router 7                                  |
| **Animation** | Framer Motion 11                                |
| **Web3**      | Ethers.js 6                                     |
| **Icons**     | React Icons 5                                   |
| **Deployment**| GitHub Pages, Vercel                            |

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Hero section
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Projects.jsx      # Featured projects
│   │   ├── ProjectCard.jsx   # Individual project card
│   │   ├── Stats.jsx         # Statistics section
│   │   ├── Contact.jsx       # Contact section
│   │   └── Footer.jsx        # Site footer
│   ├── pages/            # Page components
│   │   ├── Home.jsx          # Home page
│   │   ├── Portfolio.jsx     # Portfolio page
│   │   └── ProjectsPage.jsx  # All projects page
│   ├── hooks/            # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── utils/            # Utility functions & data
│   │   └── constants.js      # All project data
│   ├── styles/           # Additional styles
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+ or yarn

### Installation

```bash
# Navigate to the project directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/itsdanielworksdev-web3-portfolio-dashboard/`

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/itsdanielworksdev-web3-portfolio-dashboard"
   ```

2. Update the `base` in `vite.config.js` to match your repo name.

3. Deploy:
   ```bash
   npm run deploy
   ```

4. In your GitHub repo settings, enable GitHub Pages from the `gh-pages` branch.

### Vercel

1. Push your code to GitHub.

2. Go to [Vercel](https://vercel.com) and import your repository.

3. Set the following:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. Deploy! Vercel will automatically detect the Vite configuration.

## 🎨 Customization

### Personal Information

Edit `src/utils/constants.js` to update:
- Name, title, and bio
- Skills and proficiency levels
- Projects and descriptions
- Social media links
- Contact email

### Theme Colors

Edit `tailwind.config.js` to customize:
- `web3` colors (indigo palette)
- `accent` colors (teal/green palette)
- Background and text colors

### Content

All section content is managed through data files in `src/utils/`. Add or modify projects, skills, and stats by updating the constants.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Daniel Works - [daniel@itsdanielworks.dev](mailto:daniel@itsdanielworks.dev)

- GitHub: [@itsdanielworksdev](https://github.com/itsdanielworksdev)
- Twitter: [@itsdanielworks](https://twitter.com/itsdanielworks)
- LinkedIn: [itsdanielworks](https://linkedin.com/in/itsdanielworks)

---

<div align="center">
  Made with ❤️ for the Web3 ecosystem
</div>