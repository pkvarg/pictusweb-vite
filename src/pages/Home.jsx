import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Offer from '../sections/Offer'

const Home = () => {
  return (
    <>
      <div className='hero-gradient'>
        <Navbar />

        <Hero />
        <Services />
      </div>
      <div className='second-gradient'>
        <Projects />
        <Offer />
      </div>
    </>
  )
}

export default Home
