import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralInfo from './components/general-info'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
  </StrictMode>,
)
