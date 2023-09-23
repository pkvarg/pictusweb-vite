import React, { useState } from 'react'

function AudioInput() {
  const [stream, setStream] = useState(null)

  const startAudioInput = async () => {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    })
    setStream(audioStream)
  }

  return (
    <div>
      <button onClick={startAudioInput}>Start Audio Input</button>
    </div>
  )
}

export default AudioInput
