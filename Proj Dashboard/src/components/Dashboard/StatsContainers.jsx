import React from 'react'
import { FaRegEye } from "react-icons/fa6";

const StatsContainers = () => {
  return (
    <div className='flex items-center gap-2'>

      <div className='bg-statsCont text-lg p-2 rounded-xl text-gray-500'>
        <FaRegEye />
      </div>

      <div>
        <p><span className='font-semibold text-xl'>0</span> Views</p>
      </div>

    </div>
  )
}

export default StatsContainers