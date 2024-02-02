import React, { useState } from 'react'
import { useSDK } from '@metamask/sdk-react'
import { Container, Typography, Button, Grid } from '@mui/material'

function Sign() {
  const [account, setAccount] = useState()
  const { sdk, connected, connecting, provider, chainId } = useSDK()

  const connect = async () => {
    try {
      const accounts = await sdk?.connect()
      setAccount(accounts?.[0])
    } catch (err) {
      console.warn(`failed to connect..`, err)
    }
  }

  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ height: '80vh' }}
      >
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Container>
  )
}

export default Sign
