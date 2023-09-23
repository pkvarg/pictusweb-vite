import React, { useState } from 'react'

function AudioInput({ setAudioStream }) {
  const startAudioInput = async () => {
    const audioStreaming = await navigator.mediaDevices.getUserMedia({
      audio: true,
    })
    setAudioStream(audioStreaming)
  }

  return (
    <div>
      <button onClick={startAudioInput}>Start Audio Input</button>
    </div>
  )
}

export default AudioInput
