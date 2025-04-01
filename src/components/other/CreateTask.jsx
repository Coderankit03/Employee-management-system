import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const CreateTask = () => {

 const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle,setTaskTitle] = useState('')
const [taskDate,setTaskDate] = useState('')
const [assignTo,setAssignTo] = useState('')
const [category,setCategory] = useState('')
const [description,setDescription] = useState('')

const [task,setTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()

    setTask({taskTitle,taskDate,assignTo,category,description,active:false,newTask:true,completed:false,failed:false})
    
    const data = userData.employees
    console.log(data)

    data.forEach((elem) => {
      if(elem.firstName==assignTo){ 
        elem.tasks.push(task)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });
    setUserData(userData)

    setTaskTitle('')
    setCategory('')
    setDescription('')  
    setAssignTo('')
    setTaskDate('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2 '>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design'/>
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
              <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' placeholder='DD/MM/YYYY'/>
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
              <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
               className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
               className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
            </div>
          </div>
          
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
             className='w-full h-44 text-white text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id='' cols="30" rows="10" ></textarea>
            <button className=' py-3 hover:bg-emerald-600 cursor-pointer border-2 hover:border-emerald-600 border-white text-white px-5 rounded text-sm mt-4 w-full' >Create Task</button>
          </div>
          
         
        </form>
      </div>
  )
}

export default CreateTask