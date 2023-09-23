import React, { useState } from 'react'

function AudioOutput({ audioStream }) {
  const [audioContext] = useState(new AudioContext())
  const [sourceNode, setSourceNode] = useState(null)

  const startAudioOutput = () => {
    const source = audioContext.createMediaStreamSource(audioStream)
    setSourceNode(source)

    source.connect(audioContext.destination)
  }

  return (
    <div>
      <button onClick={startAudioOutput}>Start Audio Output</button>
    </div>
  )
}

export default AudioOutput
