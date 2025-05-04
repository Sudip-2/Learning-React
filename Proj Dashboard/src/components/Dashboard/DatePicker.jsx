import React, { useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import AnalyticsDateModal from './AnalyticsDateModal';

const DatePicker = () => {

      let date = new Date()
      let monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      let [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className={`bg-white flex justify-between items-center rounded-lg p-3 cursor-pointer hover:outline-2 hover:outline-gray-200 relative`}
            onClick={() => setIsModalOpen(!isModalOpen)}>
            <div className='flex items-center gap-1'>
                <span>
                    <CiCalendar />
                </span>
                {monthArr[date.getMonth()]} {date.getDate() - 6} to {monthArr[date.getMonth()]} {date.getDate()}
            </div>
            <FaAngleDown className='text-gray-400' />

            {isModalOpen && <div className='absolute top-16 right-0 bg-white w-auto py-5 pl-5 pr-16 rounded-2xl shadow-lg'
                onClick={(e) => e.stopPropagation()}
            >

                <AnalyticsDateModal text={"Last 7 days"} val={"7"} />
                <div className='mt-4'>
                    <AnalyticsDateModal text={"Last 28 days"} val={"28"} />
                </div>
                <div className='mt-4'>
                    <AnalyticsDateModal text={"Last 90 days"} val={"90"} />
                </div>
                <div className='mt-4'>
                    <AnalyticsDateModal text={"Last 365 days"} val={"365"} />
                </div>

            </div>}
        </div>
    )
}

export default DatePicker