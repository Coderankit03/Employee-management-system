import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className=' flex mt-10  justify-between gap-5 screen'>
        <div className='rounded-xl border-2 border-white w-[45%] py-6 px-9'>
            <h2 className='text-3xl text-yellow-400 font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl text-yellow-400 font-medium'>Active</h3>
        </div>
        <div className='rounded-xl border-2 border-white w-[45%] py-6 px-9'>
            <h2 className='text-3xl text-blue-400 font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium text-blue-400'>New Task</h3>
        </div>
        <div className='rounded-xl border-2 border-white w-[45%] py-6 px-9'>
            <h2 className='text-3xl text-green-400 font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium text-green-400'>Completed</h3>
        </div>
        <div className='rounded-xl border-2 border-white w-[45%] py-6 px-9 '>
            <h2 className='text-red-400 text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-red-400 text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber