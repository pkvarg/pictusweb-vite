import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavbarProjects'
import axios from 'axios'

const Counter = () => {
  const [count, setCount] = useState()

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getBots = async () => {
    const { data } = await axios.get(
      `http://localhost:1000/api/bots/counter`,

      config
    )
    console.log(data)
    setCount(data)
  }
  getBots()

  // increase
  const increaseBots = async () => {
    const { data } = await axios.post(
      `http://localhost:1000/api/bots/increase`,

      config
    )
    console.log(data)
    setCount(data)
  }

  return (
    <>
      <div className='second-gradient text-white h-[100vh]'>
        <Navbar />
        <div className='p-8' id='counter'>
          Bots unsuccessful: {count}
        </div>
        <button onClick={() => increaseBots()}>INC +1</button>
      </div>
    </>
  )
}

export default Counter
