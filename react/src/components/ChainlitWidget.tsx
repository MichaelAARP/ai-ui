import React from 'react'

export function ChainlitWidget() {
  return React.createElement('div', {
    style: { 
      width: '100%', 
      height: '400px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      overflow: 'hidden'
    }
  }, 
    React.createElement('iframe', {
      src: 'https://demchat.agetechcollaborative.org',
      style: {
        width: '100%',
        height: '100%',
        border: 'none'
      },
      title: 'Chainlit Chat'
    })
  )
}