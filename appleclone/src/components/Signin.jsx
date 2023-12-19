import React, { useContext, useState } from 'react'

import NavbarStore from './NavbarStore'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import toast from 'react-hot-toast'
import api from './Helpers/Axois.config'

const Signin = () => {
    const navigate = useNavigate()
    const { Login } = useContext(AuthContext)
    const [userData, setUserData] = useState({ email: "", password: "" })

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault()
        if (userData.email && userData.password) {
            try {
                const response = await api.post('/auth/login', { userData })

                if (response.data.success) {
                    Login(response.data.user)
                    localStorage.setItem('my-token', JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    console.log(response.data.user)
                    navigate('/')
                    toast.success(`Welcome ${response.data.user.name}`)
                }
            } catch(error){
                toast.error(error.response.data.message)
            }
        } else {
            toast.error('all fields are mandatory')
        }
    }
    return (
        <div className='signin-page'>
            <NavbarStore />
            <h1 className='signin-head'>Signin for faster checkout</h1>
            <h3 style={{ marginBottom: '50px' }}>Signin to Apple Store</h3>

            <form action="" onSubmit={sendDataToBackend}>
                <label htmlFor="">Email :</label><br />
                <input className="inputs" type="email" name="email" value={userData.email} onChange={handleChange} /><br /><br />
                <label htmlFor="">Password :</label><br />
                <input className="inputs" type="password" name="password" value={userData.password} onChange={handleChange} />
                <br /><br />
                <input className="button" type="submit" value="login" />
            </form>

            <div style={{ marginTop: '100px', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <input type="checkbox" name="" id="" style={{ height: '18px', width: '18px' }} />
                <span style={{ marginLeft: "5px" }}>Remember Me</span>
            </div>

            <div className='blue' style={{ marginTop: "30px" }}>Forgot passoword ? <i className="fa-solid fa-arrow-right-long rotate"></i></div>

            <div style={{ fontSize: "14px" }}>Don’t have an Apple ID? <span className='blue' onClick={() => navigate('/register')}>Create yours now. <i className="fa-solid fa-arrow-right-long rotate"></i></span></div>
        </div>
    )
}

export default Signin
