import React, { useState } from 'react'
import api from './Helpers/Axois.config'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Navbar2 from './Navbar2'

const Register = () => {
    const navigate = useNavigate()
    const[userData ,setUserData] = useState({name:"" , email:"",password:""})
    const handleChange = (event)=>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }


const sendDataToBackend = async(event)=>{
    event.preventDefault()
    if(userData.name && userData.email && userData.password){
        try{
            const response = await api.post("/auth/register",{userData})
            if(response.data.success){
                toast.success("registration successful")
                navigate('/signin')
            }
        }catch(error){
            toast.error(error.response.data.message)
        }
    }
}

  return (
    <div >
         <Navbar2/>
      <div className='create-id-form'>
        <div className="create-id-head">
            <h3>Apple Id</h3>
            <div style={{marginRight:'100px',marginTop:'10px'}}>
                <button>Sign in</button>
                <button>Create Your Apple Id</button>
                <button>FAQ</button>
            </div>
        </div>
           
      </div>

        <div style={{display:'flex',flexDirection:"column",alignItems:'center',width:"100vw",marginTop:"100px"}}>

        <form action="" style={{display:'flex',flexDirection:'column',width:'200px'}} onSubmit={sendDataToBackend} >
                <label htmlFor="">Name:</label>
                <input className="inputs" type="text" name="name"value={userData.name} onChange={handleChange} />
                <label htmlFor="">Email :</label>
                <input className="inputs" type="email" name="email" value={userData.email}  onChange={handleChange} />
                <label htmlFor="">Password :</label>
                <input className="inputs" type="password" name="password" value={userData.password}  onChange={handleChange} />
                <br />
                <input className="button" type="submit" value="Register" />
            </form>

        </div>
        
    </div>
  )
}

export default Register
