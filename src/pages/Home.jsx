import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Offer from '../sections/Offer'
import Contact from '../sections/Contact'
import { Footer } from '../components'
import CookieConsent from 'react-cookie-consent'

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
        <Contact />
        <CookieConsent
          location='bottom'
          style={{
            background: '#e7e7e8',
            color: '#000',
            fontSize: '22.5px',
            textAlign: 'justify',
          }}
          buttonStyle={{
            background: '#1d9f2f',
            color: '#fff',
            fontSize: '22.5px',
          }}
          buttonText='Súhlasím'
          expires={365}
          enableDeclineButton
          onDecline={() => {
            console.log('nay!')
          }}
          declineButtonStyle={{
            background: 'red',
            color: '#fff',
            fontSize: '22.5px',
          }}
          declineButtonText='Nesúhlasím'
        >
          Táto stránka používa len analytické a pre fungovanie webu nevyhnutné
          cookies. Nepoužívame funkčné ani marketingové cookies.{' '}
        </CookieConsent>

        <Footer />
      </div>
    </>
  )
}

export default Home
