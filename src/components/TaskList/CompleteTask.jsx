import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <>
     <div className='flex-shrink-0 h-full w-[300px] p-5 border-2 border-white rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-white text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm text-white'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl text-white font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2 text-white'>
                {data.description}
            </p>
            <div className='flex justify-between text-white mt-4'>
        <button className='bg-green-500 text-white cursor-pointer rounded-lg py-1 px-5 text-sm'>Completed</button>
        </div>
        </div> 
    </>
  )
}

export default CompleteTask
