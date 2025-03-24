
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Router } from 'react-router'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Router>
  <Route path='/' element={<Home/>}/>
 </Router>
 </BrowserRouter>
    
)
