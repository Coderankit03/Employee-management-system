import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)



    return (
        <div id='alltask' className='bg-[#1c1c1c] p-2 mt-5 rounded  '>
            <div className=' mb-2 py-3 flex justify-between rounded '>
                <h2 className='sm:text-lg text-white font-medium  w-1/5 '>Emp. Name</h2>
                <h3 className='sm:text-lg text-white font-medium  w-1/5 '>New</h3>
                <h5 className='sm:text-lg text-white font-medium  w-1/5 '>Active</h5>
                <h5 className='sm:text-lg text-white font-medium  w-1/5 '>Done</h5>
                <h5 className='sm:text-lg text-white font-medium  w-1/5 '>Failed</h5>
            </div>
            <div className=''>
                {userData.map(function (elem , idx) {
                    return <div key={idx} className= 'border-2 border-white mb-2 py-3 px-4 flex justify-between rounded'>
                        <h2 className='text-lg text-white font-medium w-1/5'>{elem.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
                        <h5 className='text-lg  font-medium w-1/5 text-green-400'>{elem.taskNumbers.completed}</h5>
                        <h5 className='text-lg  font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask