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
        <button
          className='
              lg:text-[35px] text-[25px] bg-violet  pt-3 px-2 rounded-xl border border-white hover:text-violet hover:bg-white absolute lg:top-8 top-2 lg:left-8 left-2'
          onClick={() => backButton()}
        >
          <span>Naspäť</span>
        </button>
        <div className='flex flex-col  justify-center items-center gap-4 text-[35px] pb-40'>
          <h1 className='lg:text-[56px] text-[45px] pt-20 pb-10'>O nás</h1>
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
