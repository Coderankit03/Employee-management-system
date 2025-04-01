import React, { useEffect,useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  const [userName,setUserName] = useState('')

 useEffect(()=>{
    if(props.data){
      setUserName(props.data.firstName)
    }else{
      ("admin")
    }
 })

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{userName} 👋</span></h1>
        <button onClick={logOutUser} className='border-white border-2 hover:bg-red-500 cursor-pointer hover:border-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
    
  )
}

export default Header