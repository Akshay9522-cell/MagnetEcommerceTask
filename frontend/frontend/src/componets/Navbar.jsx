import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const nav=useNavigate()
    const cartItem=useSelector(state=>state.myca.cart)
    const length=cartItem.length
  return (
    <>
    <div>
        <nav className='flex h-20 justify-around items-center bg-gradient-to-r from-orange-500 to-85%'>
            <h1>
            LOGO
            </h1>

            <ul className='flex gap-5'>
                <div>
               <Link to='home'><li>Home</li></Link>
             </div>
             <div className='flex justify-center items-center text-2xl'>
               <li><MdShoppingCart onClick={()=>{nav('/addcart')}} /></li>{length}
               </div>

            </ul>
            
        </nav>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar