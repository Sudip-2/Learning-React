import React from 'react'
import StatsContainers from './StatsContainers'

const Stats = () => {
  return (
    <div className='bg-white p-7 rounded-2xl mt-6'>

      <abbr title="Show the lifetime stats of your arraytree" className='no-underline'>
        <h1 className='text-xl font-semibold'>
          Lifetime
        </h1>
      </abbr>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
        <StatsContainers />
        <StatsContainers />
        <StatsContainers />
        <StatsContainers />
      </div>
    </div>
  )
}

export default Stats