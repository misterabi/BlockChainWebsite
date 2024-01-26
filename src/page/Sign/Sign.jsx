import React, { useState } from 'react'
import { useSDK } from '@metamask/sdk-react'
import './style.css'

export function Sign() {
  const [account, setAccount] = useState()
  const { sdk, connected, chainId } = useSDK()

  const connect = async () => {
    try {
      const accounts = await sdk?.connect()
      setAccount(accounts?.[0])
    } catch (err) {
      console.warn(`failed to connect..`, err)
    }
  }

  return (
    <div>
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
      {connected && (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )}
    </div>
  )
}
