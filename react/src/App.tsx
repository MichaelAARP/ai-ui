import React from 'react'
import { ChainlitAPI, ChainlitContext } from '@chainlit/react-client'
import { RecoilRoot } from 'recoil'
import { ChainlitWidget } from './components/ChainlitWidget'

const CHAINLIT_SERVER = 'https://demchat.agetechcollaborative.org'
const apiClient = new ChainlitAPI(CHAINLIT_SERVER, 'webapp')

function App() {
  return (
    <RecoilRoot>
      <ChainlitContext.Provider value={apiClient}>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1>Chainlit Chat Integration</h1>
          <p>Connected to: {CHAINLIT_SERVER}</p>
          <ChainlitWidget />
        </div>
      </ChainlitContext.Provider>
    </RecoilRoot>
  )
}

export default App