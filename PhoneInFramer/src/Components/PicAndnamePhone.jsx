import React from 'react'

const PicAndnamePhone = ({profilePic,altName,name,title}) => {
    return (
        <>
            <div className="absolute flex flex-col items-center inset-0 top-[40px] gap-[10px]">
                <div className="w-[65px] h-[65px] rounded-full">
                    <img
                        src={profilePic}
                        alt={altName}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                <div className="text-center leading-5">
                    <p className="text-white font-semibold text-sm">{name}</p>
                    <p className="text-white text-xs">{title}</p>
                </div>
            </div>
        </>
    )
}

export default 