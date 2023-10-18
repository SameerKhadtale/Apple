import React from 'react'

import NavbarStore from './NavbarStore'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    return (
        <div className='signin-page'>
            <NavbarStore />
            <h1 className='signin-head'>Signin for faster checkout</h1>
            <h3 style={{marginBottom:'50px'}}>Signin to Apple Store</h3>
            <div className='signin-input-container'>
                <div style={{textAlign:"left",fontSize:'13px',marginLeft:'15px'}}>
                    <label htmlFor="email">Email or Phone number</label>
                </div>
                <div>
                    <input type="text" id='email' className='input-email'/>
                    <i className="fa-regular fa-circle-right"></i>
                </div>

            </div>

            <div style={{marginTop:'100px', display:"flex",alignItems:"center",justifyContent:"center"}}>
                <input type="checkbox" name="" id="" style={{height:'18px',width:'18px'}} />
                <span style={{marginLeft:"5px"}}>Remember Me</span>
            </div>

            <div className='blue' style={{marginTop:"30px"}}>Forgot passoword ? <i className="fa-solid fa-arrow-right-long rotate"></i></div>
        
            <div style={{fontSize:"14px"}}>Don’t have an Apple ID? <span className='blue' onClick={()=>navigate('/create-id')}>Create yours now. <i className="fa-solid fa-arrow-right-long rotate"></i></span></div>
        </div>
    )
}

export default Signin
