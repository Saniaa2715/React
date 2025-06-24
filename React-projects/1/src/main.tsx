import { StrictMode } from 'react' //ask sir what exactly does strict mode do?
import { createRoot } from 'react-dom/client' //dom function 
import './index.css'
import App, { ClassComponent } from './App.tsx'

// ! -> non-null assertion operator tells the
//TypeScript compiler that a value typed as optional cannot be null or undefined

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ClassComponent />
  </StrictMode>,
)
