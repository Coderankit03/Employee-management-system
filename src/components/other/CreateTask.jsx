// import React, { useContext } from 'react'
// import { useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'



// const CreateTask = () => {

//  const [userData, setUserData] = useContext(AuthContext)

//   const [taskTitle,setTaskTitle] = useState('')
// const [taskDate,setTaskDate] = useState('')
// const [assignTo,setAssignTo] = useState('')
// const [category,setCategory] = useState('')
// const [description,setDescription] = useState('')

// const [task,setTask] = useState({})

//   const submitHandler=(e)=>{
//     e.preventDefault()

//     setTask({taskTitle,taskDate,assignTo,category,description,active:false,newTask:true,completed:false,failed:false})
    
//     const data = userData
    

//     const updatedData = userData.map((elem) => {
//       if (assignTo === elem.firstName) {
//         return {
//           ...elem,
//           tasks: [...elem.tasks, elem.taskNumbers.newTask],
//           taskNumbers: {
//             ...elem.taskNumbers,
//             newTask: elem.taskNumbers.newTask + 1,
//           },
//         };
//       }
//       return elem;
//     });
//     console.log(data)
//     setUserData(updatedData);
//     localStorage.setItem('employees', JSON.stringify(updatedData));


//     setTaskTitle('')
//     setCategory('')
//     setDescription('')  
//     setAssignTo('')
//     setTaskDate('')
//   }

//   return (
//     <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
//         <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full items-start justify-between'>
//           <div className='w-1/2 '>
//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//               <input
//               value={taskTitle}
//               onChange={(e)=>{
//                 setTaskTitle(e.target.value)
//               }}
//               className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design'/>
//             </div>
//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5' >Date</h3>
//               <input
//               value={taskDate}
//               onChange={(e)=>{
//                 setTaskDate(e.target.value)
//               }}
//               className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date' placeholder='DD/MM/YYYY'/>
//             </div>
//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
//               <input
//               value={assignTo}
//               onChange={(e)=>{
//                 setAssignTo(e.target.value)
//               }}
//                className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
//             </div>
//             <div>
//               <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//               <input
//               value={category}
//               onChange={(e)=>{
//                 setCategory(e.target.value)
//               }}
//                className='text-sm text-white size-10 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
//             </div>
//           </div>
          
//           <div className='w-2/5 flex flex-col items-start'>
//             <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//             <textarea
//             value={description}
//             onChange={(e)=>{
//               setDescription(e.target.value)
//             }}
//              className='w-full h-44 text-white text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name='' id='' cols="30" rows="10" ></textarea>
//             <button className=' py-3 hover:bg-emerald-600 cursor-pointer border-2 hover:border-emerald-600 border-white text-white px-5 rounded text-sm mt-4 w-full' >Create Task</button>
//           </div>
          
         
//         </form>
//       </div>
//   )
// }

// export default CreateTask




import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: elem.taskNumbers.newTask + 1,
          },
        };
      }
      return elem;
    });
    console.log(updatedData)

    setUserData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));

    setTitle('');
    setAsignTo('');
    setCategory('');
    setTaskDate('');
    setDescription('');
  };

  return (
    <div className="p-6 bg-input mt-3 shadow-lg rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4 text-gray-200">Create New Task</h2>
      <form onSubmit={submitHandler} className="sm:flex flex-wrap items-start justify-between">
        <div className="sm:w-1/2 space-y-4">
          {/** Task Title */}
          <div>
            <label className="text-white text-sm">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212]  border focus:border-white border-gray-600 text-gray-300 rounded-md outline-none  focus:border-highlight  transition"
              type="text"
              placeholder="e.g. Design a UI"
            />
          </div>

          {/** Task Date */}
          <div>
            <label className="text-white text-sm">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212] border border-gray-600 focus:border-white text-gray-300 rounded-md outline-none  focus:border-highlight transition"
              type="date"
            />
          </div>

          {/** Assign To */}
          <div>
            <label className="text-white text-sm">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212] border border-gray-600 text-white focus:border-white rounded-md outline-none  focus:border-highlight transition"
              type="text"
              placeholder="Employee name"
            />
          </div>

          {/** Category */}
          <div>
            <label className="text-white text-sm">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#121212] border border-gray-600 text-whiet focus:border-white rounded-md outline-none  focus:border-highlight transition"
              type="text"
              placeholder="Design, Development, etc."
            />
          </div>
        </div>

        {/** Description & Submit Button */}
        <div className="sm:w-2/5 flex flex-col ">
          <label className="text-white mt-2 text-sm">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-36 px-3 py-2 bg-[#121212] border border-gray-600 text-white rounded-md outline-none focus:border-white transition"
            rows="5"
            placeholder="Task details..."
          ></textarea>
          
          <button className="w-full py-2 bg-button text-white cursor-pointer border-1 mt-3 hover:bg-emerald-500 bg-[#1c1c1c] hover:border-emerald-500 rounded-md hover:scale-103 text-lg transition">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;