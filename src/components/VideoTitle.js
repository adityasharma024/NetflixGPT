import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-current'>
        <h1 className='text-4xl font-bold text-white'>{title}</h1>
        <p className='py-6 px-1 text-lg w-1/4 text-white'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black mx-2 p-4 px-12 text-lg  rounded-lg hover:bg-opacity-80'> ▶ Play</button>
            <button className=' bg-white text-black mx-2 p-4 px-12 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80'>More Info</button>

        </div>
    </div>
  )
}

export default VideoTitle