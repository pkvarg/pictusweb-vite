import React, { useState } from 'react'
import { AudioInput, AudioOutput } from '../components'

const AudioStream = () => {
  const [audioStream, setAudioStream] = useState(null)
  console.log(audioStream)

  return (
    <div className='hero-gradient text-[#ffffff] h-[100vh] text-[25px]'>
      <h1 className='text-center pt-20 text-[35px]'>Audio Stream</h1>
      <div className='ml-20 mt-20'>
        <AudioInput setAudioStream={setAudioStream} />
        <AudioOutput audioStream={audioStream} />
      </div>
    </div>
  )
}

export default AudioStream
