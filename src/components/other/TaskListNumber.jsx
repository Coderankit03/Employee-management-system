import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='sm:flex mt-10  justify-between gap-5 screen'>
        <div className='rounded-xl border-2 border-white w-[45%] py-2 px-4 sm:py-6 sm:px-9'>
            <h2 className='text-3xl flex justify-center text-yellow-400 font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl flex justify-center text-yellow-400 font-medium'>Active</h3>
        </div>
        <div className='rounded-xl mt-2 py-2 px-4 sm:py-6 sm:px-9 border-2 border-white w-[45%] '>
            <h2 className='text-3xl text-blue-400 flex justify-center font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium flex justify-center text-blue-400'>New</h3>
        </div>
        <div className='rounded-xl mt-2 py-2 px-4 sm:py-6 sm:px-9 border-2 border-white w-[45%] '>
            <h2 className='text-3xl flex justify-center text-green-400 font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium flex justify-center text-green-400'>Completed</h3>
        </div>
        <div className='rounded-xl mt-2 py-2 px-4 sm:py-6 sm:px-9 border-2 border-white w-[45%] '>
            <h2 className='text-red-400 text-3xl flex justify-center font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-red-400 text-xl flex justify-center font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber