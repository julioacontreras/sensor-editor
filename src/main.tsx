import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Not exist element root')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark'>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)