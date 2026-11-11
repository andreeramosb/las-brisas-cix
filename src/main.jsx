import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importar Bootstrap y Bootstrap Icons CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// ¡IMPORTANTE! Importa el bundle de JavaScript de Bootstrap para habilitar dropdowns, modales, etc.
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)