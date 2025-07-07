
import React, { useState } from 'react'

const Login = () => {

  const [state,setState] = useState('Sign Up')

  const [email,setEmail] = useState('')
  const [name,setNmae] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler = async(event)=>{
    event.preventDefault()
  }//prevent other activities and perform this event omnly first
  //not reload the form as it is it's usual activity


  return (
    <form className='min-h-[80vh] flex items-center'>
      <div>
        <p>{state === 'Sign Up'? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up'? "Sign Up" : "log-in"} to book an appointment </p>
        <div>
          <p>Full Name</p>
          <input type="text" onChange={(e)=>setName(e.target.name)  } value={name} required />
        </div>
        <div>
          <p>Email</p>
          <input type="email" onChange={(e)=>setName(e.target.name)  } value={name} required/>
        </div>
        <div>
          <p>Password</p>
          <input type="password" onChange={(e)=>setName(e.target.name)  } value={name} required />
        </div>



      </div>


    </form>
    
  )
}

export default Login