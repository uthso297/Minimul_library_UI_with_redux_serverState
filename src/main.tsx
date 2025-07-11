import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Root from './Routes/Root.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Root} />
    </Provider>
  </StrictMode>,
)
