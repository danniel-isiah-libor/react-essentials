import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const password = "p@ssw0rd"
// const password = import.meta.env.VITE_DATABASE_PASSWORD 
// console.log(import.meta.env.VITE_DATABASE_PASSWORD);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
