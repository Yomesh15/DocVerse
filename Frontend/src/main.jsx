import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='overflow-x-hidden'>
        <App />
      </div>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
)