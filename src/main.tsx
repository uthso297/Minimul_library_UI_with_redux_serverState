import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Root from './Routes/Root.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Root} />
  </StrictMode>,
)
