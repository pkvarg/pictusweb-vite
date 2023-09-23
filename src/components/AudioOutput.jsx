import React, { useState } from 'react'

function AudioOutput({ audioStream }) {
  const [audioContext, setAudioContext] = useState(null)
  const [sourceNode, setSourceNode] = useState(null)

  const startAudioOutput = () => {
    if (!audioContext) {
      const context = new AudioContext()
      setAudioContext(context)

      const source = context.createMediaStreamSource(audioStream)
      setSourceNode(source)

      source.connect(context.destination)
    }
  }

  return (
    <div>
      <button onClick={startAudioOutput}>Start Audio Output</button>
    </div>
  )
}

export default AudioOutput
