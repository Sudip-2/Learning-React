import React from 'react'

const AnalyticsDateModal = ({text,val}) => {
    return (
        <div className='flex gap-2 items-center'>
            <input type="radio" name="date" id={val} value={val} defaultChecked={val === "7"}/>
            <label htmlFor={val}>{text}</label>
        </div>
    )
}

export default AnalyticsDateModal