import React from 'react'

const ListsPhone = ({liOne,litwo,liThree}) => {
    return (
        <>
            <li className="font-semibold bg-white w-full py-[10px] rounded-full text-xs">
                {liOne}
            </li>
            <li className="font-semibold bg-white w-full py-[10px] rounded-full mt-[10px] text-xs">
                {litwo}
            </li>
            <li className="font-semibold bg-white w-full py-[10px] rounded-full mt-[10px] text-xs">
                {liThree}
            </li>
        </>
    )
}

export default ListsPhone