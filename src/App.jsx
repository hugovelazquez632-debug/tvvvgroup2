import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Business from './pages/Business'
export default function App(){
 return (
  <BrowserRouter>
   <nav><Link to="/business">Ver /business</Link></nav>
   <Routes><Route path="/business" element={<Business/>}/></Routes>
  </BrowserRouter>
 )
}
