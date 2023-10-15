import React, { useState } from 'react'
import Navbar from '../components/NavbarProjects'
import axios from 'axios'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [visitorsAgreed, setVisitorsAgreed] = useState(0)
  const [visitorsDeclined, setVisitorsDeclined] = useState(0)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getBots = async () => {
    const { data } = await axios.get(
      `https://api.pictusweb.com/api/bots/counter`,
      // `http://localhost:2000/api/bots/counter`,

      config
    )
    setCount(data)
  }

  const getVisitors = async () => {
    const { data } = await axios.get(
      `https://api.pictusweb.com/api/visitors/pic/counter`,

      // `http://localhost:2000/api/visitors/pic/counter`,

      config
    )
    setVisitorsAgreed(data.agreed)
    setVisitorsDeclined(data.declined)
  }

  return (
    <>
      <div className='second-gradient text-white h-[100vh]'>
        <Navbar />

        <div className='p-8 text-[25px]' id='counter'>
          <div className='text-[30px] pb-2'>
            <button
              className='bg-[#090909] p-1'
              onClick={() => {
                getBots()
                getVisitors()
              }}
            >
              Get Stats
            </button>
          </div>
          <p>Bots unsuccessful: {count}</p>
          <p>Visitors dec: {visitorsDeclined}</p>
          <p>Visitors agr: {visitorsAgreed}</p>
        </div>
      </div>
    </>
  )
}

export default Counter
