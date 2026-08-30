import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Business from './pages/Business'
export default function App(){
 return (
  <BrowserRouter>
   <nav style={{padding:12, background:'black', color:'white', display:'flex', gap:16, borderBottom:'1px solid #333'}}>
    <Link to="/" style={{fontWeight:700}}>TVVV Lab</Link>
    <Link to="/business">Business</Link>
   </nav>
   <Routes><Route path="/" element={<Business/>}/><Route path="/business" element={<Business/>}/></Routes>
  </BrowserRouter>
 )
}
