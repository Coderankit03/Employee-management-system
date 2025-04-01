import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email , password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        
        <div className='border-2 bg-[#1c1c1c]  border-white px-8 sm:px-20 rounded-xl'>
            <form 
            onSubmit={(e) => {
                submitHandler(e)
            }}
            
            className='flex flex-col items-center justify-center' >
                <h1 className='font-semibold text-4xl mb-10 mt-10 text-blue-400'>Login</h1>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                   
                }}
                required 
                className= 'text-white outline-none bg-transparent border-2 border-white text-xl py-4 px-5 rounded-xl placeholder:text-gray-400' type='email' placeholder='Email' />
                <input 
                value={password}

                onChange={(e)=>{
                    setPassword(e.target.value)
                }}

                required 
                className= 'text-white outline-none bg-transparent border-2 border-white text-xl py-4 px-5 mt-4 rounded-xl placeholder:text-gray-400'  type='password' placeholder=' Password' />
                <button className=' outline-none bg-transparent border-2 border-white mt-5 text-xl w-full  py-4 px-10 rounded-xl text-white placeholder:text-white cursor-pointer hover:bg-blue-400 hover:border-blue-400 mb-18'>Log in</button>
            </form>
        </div>

    </div>
  )
}

export default Login