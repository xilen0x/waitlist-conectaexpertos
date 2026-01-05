import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WaitlistProvider } from './providers/WaitlistProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WaitlistProvider>
      <App />
    </WaitlistProvider>
  </React.StrictMode>,
)
