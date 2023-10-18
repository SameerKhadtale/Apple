import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()
  const [shoppingClick, SetShoppingClick] = useState(false)
  function HandleShoppingClick() {
    SetShoppingClick(!shoppingClick)
    console.log(shoppingClick)
  }
  const shoppingClassNameWhite = shoppingClick ? 'Active-shopping-white' : 'inActive-shopping'
  return (
    <>
      <nav className='navbar-two'>
        <div style={{ display: 'flex', alignItems: 'center', width: "100%" }}>
          <ul>
            <li onClick={() => { navigate('/') }}><i class="fa-brands fa-apple"></i></li>
            <li onClick={() => { navigate('/store') }}>Store</li>
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
            <li onClick={HandleShoppingClick}><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>

      </nav>
      <div className={shoppingClassNameWhite}>
        <div className="shopping-cart-content">
          <h3>Your Bag is empty</h3>
          <p style={{ marginTop: '15px', fontSize: '12px' }}><span style={{ color: 'rgb(128, 128, 248)', textDecoration: 'underline' }}>signin</span> to see if you have any saved items</p>
          <h6>My Profile</h6>
          <div className="profile-list"><i class="fa-solid fa-box"></i> Orders</div>
          <div className="profile-list"><i class="fa-regular fa-bookmark"></i> Your Saves</div>
          <div className="profile-list"><i class="fa-solid fa-circle-radiation"></i> Account</div>
          <div className="profile-list" onClick={() => navigate('/signin')}><i class="fa-regular fa-circle-user"></i> Signin</div>
        </div>
      </div>
    </>

  )
}

export default Navbar2
