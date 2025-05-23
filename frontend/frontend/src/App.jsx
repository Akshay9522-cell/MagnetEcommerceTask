
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import AddToCart from './pages/AddToCart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'

function App() {


  return (
    <>
   
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar/>}> 

      <Route path='home' element={<Home/>}/>
      <Route path='addcart' element={<AddToCart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
     <Route path="/order-confirmation" element={<OrderConfirmation/>}/>

      



      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
