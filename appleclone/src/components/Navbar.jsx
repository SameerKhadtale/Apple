import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
const Navbar = () => {
  const navigate = useNavigate()
  const [shoppingClick, SetShoppingClick] = useState(false)
  function HandleShoppingClick() {
    SetShoppingClick(!shoppingClick)
    console.log(shoppingClick)
  }

  const shoppingClassName = shoppingClick ? 'Active-shopping' : 'inActive-shopping'

  const {state ,Logout} = useContext(AuthContext)


  return (
    <>
    <nav className='navbar'>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <ul>
          <li onClick={() => { navigate('/') }}><i className="fa-brands fa-apple"></i></li>
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
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li onClick={HandleShoppingClick}><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
      </div>
     
    </nav>
    <div className={shoppingClassName}>
        <div className="shopping-cart-content">
          <h3>Your Bag is empty</h3>
          {state?.user?.name ? <div> <h4>welcome {state?.user?.name} !</h4> </div> :  <p style={{marginTop:'15px' ,fontSize:'12px'}}><span onClick={()=> navigate('/signin')} style={{color:'rgb(128, 128, 248)',textDecoration:'underline'}}>signin</span> to see if you have any saved items</p> }
         
          <h6>My Profile</h6>
          <div className="profile-list"><i className="fa-solid fa-box"></i> Orders</div>
          <div className="profile-list"><i className="fa-regular fa-bookmark"></i> Your Saves</div>
          <div className="profile-list"><i className="fa-solid fa-circle-radiation"></i> Account</div>
          {state?.user?.name ? <div onClick={()=>Logout()}>Logout</div> :  <div className="profile-list" onClick={()=> navigate('/signin')}><i className="fa-regular fa-circle-user"></i> Signin</div> }
          {/* <div className="profile-list" onClick={()=> navigate('/signin')}><i className="fa-regular fa-circle-user"></i> Signin</div> */}
        </div>
      </div>
    </>
  )
}

export default Navbar
