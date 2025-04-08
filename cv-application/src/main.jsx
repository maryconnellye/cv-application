import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app'
import Edit from './components/edit'
import Submit from './components/submit'
import Form from './components/form'



createRoot(document.getElementById('root')).render(
  /** Strict mode should only wrap <App />. the Edit and Submit components should not be here, they should be inside of App.jsx */
  <StrictMode>
    <App />
    <Edit />
    <Submit />
  </StrictMode>,
)
