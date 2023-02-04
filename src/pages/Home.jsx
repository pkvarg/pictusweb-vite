import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Offer from '../sections/Offer'
import Contact from '../sections/Contact'
import { Footer } from '../components'
import CookieConsent from 'react-cookie-consent'

const Home = ({ language }) => {
  // const [language, setLanguage] = useState()
  // const callback = (payload) => {
  //   setLanguage(payload)
  // }
  return (
    <>
      <div className='hero-gradient'>
        <Navbar language={language} />

        <Hero language={language} />
        <Services language={language} />
      </div>
      <div className='second-gradient'>
        <Projects language={language} />
        <Offer language={language} />
        <Contact language={language} />
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
