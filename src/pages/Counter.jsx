import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavbarProjects'
import axios from 'axios'

const Counter = () => {
  const [count, setCount] = useState()

  const getBots = async () => {
    const { data } = await axios.post(`http://localhost:1000/api/bots/increase`)
    console.log(data)
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
