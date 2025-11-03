import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data, setData] = useState([])
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/jaleedkhanofficial')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='bg-gray-700 m-4 text-center text-white p-4 text-3xl rounded-2xl'> GitHub Follower : {data.followers}
    <img src={data.avatar_url} width={300} className='rounded-2xl'/>
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader = async() => {
    const Response = await fetch('https://api.github.com/users/jaleedkhanofficial')
    return Response.json()
}
