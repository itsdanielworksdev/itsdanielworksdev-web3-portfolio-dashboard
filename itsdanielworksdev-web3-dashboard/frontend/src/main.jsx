import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

/**
 * Main entry point for the Web3 Portfolio Dashboard
 * Wraps the app in BrowserRouter for routing
 * and StrictMode for development best practices
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/itsdanielworksdev-web3-portfolio-dashboard">
      <App />
    </BrowserRouter>
  </StrictMode>,
)