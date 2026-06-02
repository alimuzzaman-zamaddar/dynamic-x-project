import './index.css'
import { StrictMode } from 'react'
import router from './router/router.jsx'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
