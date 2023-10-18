import React from 'react'
import Navbar2 from './Navbar2'

const CreateAppleId = () => {
  return (
    <div>
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
    </div>
  )
}

export default CreateAppleId
