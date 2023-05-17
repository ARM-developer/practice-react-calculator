import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './assets/css/index.css'

const ContainerRoot = document.getElementById('root')

ReactDOM.createRoot(ContainerRoot as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
