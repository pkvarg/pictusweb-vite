import React from 'react'
import { Footer } from '../components'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const backButton = () => {
    navigate(-1)
  }
  return (
    <>
      <div className='hero-gradient text-white relative'>
        <p className='text-center pt-4'>
          <a className='text-[2rem] lg:text-[1.5rem]' href='/'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </p>
        <div className='flex flex-col  justify-center items-center gap-4 text-[25px] pb-10 lg:pb-40 mx-4'>
          <h1 className='lg:text-[35x] text-[40px] py-20'>O nás</h1>

          <p>Pictusweb.s.r.o.</p>
          <p>Nábrežná 42</p>
          <p>Nové Zámky</p>
          <p>940 02</p>
          <p>+421 904 798 505</p>
          <p>IČO: 54631068</p>
          <p>DIČ: 2121741424</p>
          <p>Číslo účtu: </p>
          <p className='text-center'>SK68 8330 0000 0022 0221 4313</p>
          <p className='text-center'>
            Spoločnosť Pictusweb, s.r.o. je zapísaná
          </p>
          <p className='text-center'>
            v obchodnom registri okresného súdu Nitra:
          </p>
          <p className='text-center'>Oddiel: Sro Vložka číslo: 57457/N</p>
          <p className='text-center'>Firma nie je platcom DPH.</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default About
