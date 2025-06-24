import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppComponent, ValidComponet } from './App.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* // A is captilalized (because otherwise it finds pure html tag if smaller case) */}
    <App /> 
    <AppComponent/>
    <ValidComponet/>
  </StrictMode>,
)
