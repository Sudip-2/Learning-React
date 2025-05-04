import React from 'react'
import Chart from './Chart'

const ChartContainer = () => {
  return (
    <div className=' bg-white rounded-2xl py-10 mt-6'>

      <h2 className='text-xl font-semibold pl-7'>Activity</h2>

      <h2 className='text-base font-bold pl-7 mt-5'>Views and clicks</h2>

      <div className='flex  gap-4 pl-7 mt-3'>
        <h3>Views: <span className='font-semibold text-lg'>0</span></h3>
        <h3>Clicks: <span className='font-semibold text-lg'>0</span></h3>
      </div>

      <div className='pr-7 mt-5'>
        <Chart />
      </div>
    </div>
  )
}

export default ChartContainer