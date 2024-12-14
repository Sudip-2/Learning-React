import { useState } from 'react'

export default function Square({value,handleOnclick}) {

    return <button className={`bg-gray-100 border border-black w-[100px] h-[100px] text-4xl font-semibold rounded-sm ${value == 'X' ? 'text-green-400':'text-yellow-400'}`}
        onClick={handleOnclick}
    >{value}</button>;
}