import React from 'react'

const ExampleSite = ({img,imgName}) => {
    return (
        <>
            <div className="w-[220px] h-[150px]">
                <img
                    src={img}
                    alt= {imgName}
                    className="object-cover w-full h-full rounded-[30px]"
                />
            </div>
        </>
    )
}

export default ExampleSite