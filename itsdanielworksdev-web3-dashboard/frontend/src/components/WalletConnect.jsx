import { motion, AnimatePresence } from 'framer-motion'
import { FaEthereum } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import useWallet from '../hooks/useWallet'

/**
 * WalletConnect Component
 * Displays a connect/disconnect button for EVM wallets.
 * Shows truncated address and ETH balance when connected.
 */
function WalletConnect() {
  const { account, balance, isConnecting, error, connect, disconnect } = useWallet()

  // Shorten 0x address for display: 0x1234...abcd
  const shortAddress = account
    ? `${account.slice(0, 6)}...${account.slice(-4)}`
    : null

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {account ? (
          /* Connected state */
          <motion.div
            key="connected"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/30 text-accent text-sm font-mono">
              <FaEthereum />
              <span>{shortAddress}</span>
              {balance && (
                <span className="text-dark-400 text-xs">{balance} ETH</span>
              )}
            </div>
            <button
              onClick={disconnect}
              className="p-1.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-400 hover:text-red-400 hover:border-red-400/30 transition-all duration-200"
              aria-label="Disconnect wallet"
            >
              <HiX className="text-sm" />
            </button>
          </motion.div>
        ) : (
          /* Disconnected state */
          <motion.button
            key="disconnected"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={connect}
            disabled={isConnecting}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaEthereum className="text-accent" />
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Error tooltip */}
      {error && (
        <p className="absolute top-full mt-1 right-0 text-xs text-red-400 bg-dark-900 border border-red-400/20 rounded-lg px-3 py-1.5 whitespace-nowrap z-50">
          {error}
        </p>
      )}
    </div>
  )
}

export default WalletConnect
