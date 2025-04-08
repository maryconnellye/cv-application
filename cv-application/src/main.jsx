import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app'
import Edit from './components/edit'
import Submit from './components/submit'
import Form from './components/form'



createRoot(document.getElementById('root')).render(
/**
   * Note: <StrictMode> should ideally only wrap <App />.
   * 
   * The <Edit /> and <Submit /> components should not be rendered here directly.
   * They belong *inside* the App component — that way, their rendering can be controlled
   * by App’s internal state (e.g., editMode).
   * 
   * Suggestion: Move <Edit /> and <Submit /> into App.jsx and conditionally render
   * them based on the appropriate logic (e.g., `editMode ? <Edit /> : <Submit />`)
   * 
   * However, it may make the most sense to remove these components per my comment in the other file!!
   */  
   <StrictMode>
    <App />
    <Edit />
    <Submit />
  </StrictMode>,
)
