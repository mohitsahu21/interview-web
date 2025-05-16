import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Router>
    <App />
    </Router>
    </Provider>
  </StrictMode>,
)
