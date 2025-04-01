
import React from 'react'

const AcceptTask = ({data}) => {
 
  
  return (
    <>
      <div className='flex-shrink-0 h-full sm:mb-0 mb-3 w-[350px] sm:w-[300px] p-5 border-2 border-white rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm text-white'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl text-white font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2 text-white '>
                {data.description}
            </p>
            <div className='flex justify-between mt-4'>
        <button className='bg-green-500 rounded-lg cursor-pointer text-white  py-1 px-5 text-sm'>Completed</button>
        <button className='bg-red-500 text-white rounded-lg cursor-pointer py-1 px-4 text-sm'>Failed</button>
        </div>
        </div>
        
    </>
  )
}

export default AcceptTask
