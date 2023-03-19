import React, { useState } from 'react'
import Navbar from '../components/NavbarProjects'
import axios from 'axios'

const Counter = () => {
  const [count, setCount] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getBots = async () => {
    const { data } = await axios.get(
      `https://pictusweb.online/api/bots/counter`,

      config
    )
    setCount(data)
  }
  getBots()

  return (
    <>
      <div className='second-gradient text-white h-[100vh]'>
        <Navbar />
        <div className='p-8' id='counter'>
          Bots unsuccessful: {count}
        </div>
      </div>
    </>
  )
}

export default Counter
