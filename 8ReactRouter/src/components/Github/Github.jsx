import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const url = 'https://api.github.com/users/sudip-2'

function Github() {
    // const [data,setData] = useState(null)

    // useEffect(() => {
    //     fetch(url)
    //     .then((respone) => respone.json())
    //     .then((res) => {
    //         console.log(res)
    //         setData(res)
    //     })
    // },[])

    const data = useLoaderData()
  return (
    <>
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4 '>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="github profile image" width={300}/>
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(url)
    return response.json()
}