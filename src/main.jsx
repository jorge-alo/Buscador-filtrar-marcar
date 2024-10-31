import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BuscadorApp } from './BuscadorApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < BuscadorApp/>
  </StrictMode>,
)