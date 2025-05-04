import React, { useState } from 'react'
import DatePicker from './DatePicker';
import Stats from './Stats';
import ChartContainer from './ChartContainer';
import AdminHeader from '../AdminHeader';

const Analytics = () => {

  return (
    <>
      <div>
        <AdminHeader />
        <div className='bg-blue-50 min-h-svh px-4 pt-6'>

          {/* Date picker part */}
          <DatePicker />
          {/* Date picker part */}

          {/* Stats */}
          <Stats />
          {/* Stats */}

          {/* Chart */}
          <ChartContainer />
          {/* Chart */}

        </div>
      </div>
    </>
  )
}

export default Analytics