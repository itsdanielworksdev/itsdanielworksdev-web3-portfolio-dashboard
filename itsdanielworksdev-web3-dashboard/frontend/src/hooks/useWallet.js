import { useState, useCallback } from 'react'
import { BrowserProvider } from 'ethers'

/**
 * useWallet Hook
 * Manages MetaMask / EIP-1193 wallet connection using Ethers.js v6.
 *
 * @returns {Object} { account, chainId, balance, isConnecting, error, connect, disconnect }
 *
 * @example
 * const { account, connect, disconnect } = useWallet()
 */
function useWallet() {
  const [account, setAccount]       = useState(null)
  const [chainId, setChainId]       = useState(null)
  const [balance, setBalance]       = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError]           = useState(null)

  /** Connect to the injected wallet (MetaMask, Phantom EVM, etc.) */
  const connect = useCallback(async () => {
    if (!window.ethereum) {
      setError('No Web3 wallet detected. Please install MetaMask.')
      return
    }

    setIsConnecting(true)
    setError(null)

    try {
      const provider = new BrowserProvider(window.ethereum)
      const accounts = await provider.send('eth_requestAccounts', [])
      const network  = await provider.getNetwork()
      const signer   = await provider.getSigner()
      const rawBal   = await provider.getBalance(accounts[0])

      setAccount(accounts[0])
      setChainId(Number(network.chainId))
      // Format balance to 4 decimal places
      setBalance((Number(rawBal) / 1e18).toFixed(4))

      // Listen for account / chain changes
      window.ethereum.on('accountsChanged', (accs) => {
        setAccount(accs[0] ?? null)
        if (!accs[0]) disconnect()
      })
      window.ethereum.on('chainChanged', () => window.location.reload())
    } catch (err) {
      setError(err.message ?? 'Failed to connect wallet.')
    } finally {
      setIsConnecting(false)
    }
  }, [])

  /** Disconnect wallet and reset state */
  const disconnect = useCallback(() => {
    setAccount(null)
    setChainId(null)
    setBalance(null)
    setError(null)
    if (window.ethereum?.removeAllListeners) {
      window.ethereum.removeAllListeners('accountsChanged')
      window.ethereum.removeAllListeners('chainChanged')
    }
  }, [])

  return { account, chainId, balance, isConnecting, error, connect, disconnect }
}

export default useWallet
