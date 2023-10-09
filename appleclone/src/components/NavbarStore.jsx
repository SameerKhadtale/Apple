import React from 'react'
import { useNavigate } from 'react-router-dom'
const NavbarStore = () => {
    const navigate = useNavigate()
    return (
      <nav className='navbar-2'>
          <ul>
              <li onClick={()=>{navigate('/')}}><i class="fa-brands fa-apple"></i></li>
              <li onClick={()=>{navigate('/store')}}>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Vision</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>Entertainment</li>
              <li>Accessories</li>
              <li>Support</li>
              <li><i class="fa-solid fa-magnifying-glass"></i></li>
              <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
      </nav>
    )
  }


export default NavbarStore
