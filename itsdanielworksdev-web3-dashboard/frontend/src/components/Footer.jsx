import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { navLinks, socialLinks } from '../utils/constants'

/**
 * Footer Component
 * Site footer with navigation links, social icons,
 * copyright, and branding
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-800/50 bg-dark-950">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-web3-500 flex items-center justify-center text-white font-bold text-sm">
                D
              </span>
              <span className="text-lg font-bold text-white">
                Daniel <span className="text-accent">Works</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed">
              Full Stack & Web3 Developer building decentralized applications and modern web solutions.
              Available for freelance, bounties, and contributor roles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a
                      href={link.path}
                      className="text-dark-400 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-dark-400 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="Email"
              >
                <HiMail className="text-lg" />
              </a>
            </div>
            <p className="text-dark-500 text-xs">
              Available for Web3 projects and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Daniel Works. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm flex items-center gap-1">
            Built with <FaHeart className="text-accent/80" /> for the Web3 ecosystem
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer