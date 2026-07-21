/**
 * Constants and configuration for the Web3 Portfolio Dashboard
 * Contains all project data, skill sets, and social links
 */

// ===== Navigation Links =====
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
]

// ===== Social Links =====
export const socialLinks = {
  github: 'https://github.com/itsdanielworksdev',
  twitter: 'https://twitter.com/itsdanielworks',
  linkedin: 'https://linkedin.com/in/itsdanielworks',
  email: 'daniel@itsdanielworks.dev',
}

// ===== Skills Data Organized by Category =====
export const skillsData = [
  {
    category: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'React', level: 88 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    category: 'Web3',
    icon: '🔗',
    skills: [
      { name: 'Solidity', level: 82 },
      { name: 'Ethers.js', level: 85 },
      { name: 'Wallet Integration', level: 80 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

// ===== Projects Data =====
export const projectsData = [
  {
    id: 1,
    title: 'Web3 Portfolio Dashboard',
    description:
      'A production-ready Web3 developer portfolio with responsive design, dark theme, Framer Motion animations, and full deployment configuration for GitHub Pages and Vercel.',
    image: 'https://placehold.co/600x400/1e293b/00d4aa?text=Portfolio+Dashboard&font=inter',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Ethers.js'],
    github: 'https://github.com/itsdanielworksdev/itsdanielworksdev-web3-portfolio-dashboard',
    live: 'https://itsdanielworksdev.github.io/itsdanielworksdev-web3-portfolio-dashboard',
    featured: true,
  },
  {
    id: 2,
    title: 'Solana Wallet Dashboard',
    description:
      'A comprehensive Solana wallet dashboard with real-time balance tracking, transaction history, token portfolio management, and DeFi integration capabilities.',
    image: 'https://placehold.co/600x400/1e293b/6366f1?text=Solana+Wallet&font=inter',
    technologies: ['React', 'Solana Web3.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/itsdanielworksdev/solana-wallet-dashboard',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'NFT Marketplace UI',
    description:
      'A modern NFT marketplace interface with minting functionality, collection browsing, auction system, and wallet connection features for Ethereum and Solana.',
    image: 'https://placehold.co/600x400/1e293b/00f5d4?text=NFT+Marketplace&font=inter',
    technologies: ['React', 'Solidity', 'IPFS', 'Ethers.js'],
    github: 'https://github.com/itsdanielworksdev/nft-marketplace-ui',
    live: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Crypto Price Tracker',
    description:
      'Real-time cryptocurrency price tracker with interactive charts, portfolio tracking, price alerts, and multi-exchange data aggregation using CoinGecko API.',
    image: 'https://placehold.co/600x400/1e293b/818cf8?text=Crypto+Tracker&font=inter',
    technologies: ['React', 'Chart.js', 'REST APIs', 'CSS'],
    github: 'https://github.com/itsdanielworksdev/crypto-price-tracker',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'DAO Voting App',
    description:
      'A decentralized autonomous organization voting application with proposal creation, token-based voting, quorum management, and on-chain execution tracking.',
    image: 'https://placehold.co/600x400/1e293b/4f46e5?text=DAO+Voting&font=inter',
    technologies: ['Solidity', 'React', 'Hardhat', 'Ethers.js'],
    github: 'https://github.com/itsdanielworksdev/dao-voting-app',
    live: '#',
    featured: true,
  },
  {
    id: 6,
    title: 'DeFi Dashboard',
    description:
      'A decentralized finance dashboard for tracking yields, managing liquidity positions, monitoring lending protocols, and executing swaps across multiple chains.',
    image: 'https://placehold.co/600x400/1e293b/00b894?text=DeFi+Dashboard&font=inter',
    technologies: ['React', 'Web3.js', 'The Graph', 'Tailwind CSS'],
    github: 'https://github.com/itsdanielworksdev/defi-dashboard',
    live: '#',
    featured: false,
  },
]

// ===== Statistics Data =====
export const statsData = [
  {
    id: 1,
    label: 'Projects Completed',
    value: '15+',
    icon: '🚀',
    description: 'Production-ready Web3 and full-stack applications',
  },
  {
    id: 2,
    label: 'GitHub Repositories',
    value: '20+',
    icon: '📦',
    description: 'Open source contributions and personal projects',
  },
  {
    id: 3,
    label: 'Contributions',
    value: '100+',
    icon: '🌟',
    description: 'Across Web3, open source, and developer communities',
  },
  {
    id: 4,
    label: 'Technologies',
    value: '15+',
    icon: '⚡',
    description: 'Languages, frameworks, and Web3 protocols mastered',
  },
]

// ===== Hero Data =====
export const heroData = {
  name: 'Daniel Works',
  title: 'Full Stack & Web3 Developer',
  introduction:
    'Building decentralized applications and full-stack solutions that bridge the gap between traditional web development and blockchain technology. Passionate about open source, DeFi, and creating impactful Web3 experiences.',
  highlights: [
    'Smart Contract Development',
    'React & Modern Frontend',
    'DeFi & DApp Architecture',
    'Open Source Contributor',
  ],
}

// ===== Contact Information =====
export const contactInfo = {
  email: 'daniel@itsdanielworks.dev',
  location: 'Remote / Worldwide',
  availability: 'Available for freelance, bounties, and contributor roles',
}

// ===== Resume Link =====
export const resumeLink = 'https://docs.google.com/document/d/your-resume-id/export?format=pdf'