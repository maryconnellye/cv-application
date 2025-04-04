import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app'
import Edit from './components/edit'
import Submit from './components/submit'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Edit />
    <Submit />
  </StrictMode>,
)
