import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Projects from '../sections/Projects'
import Offer from '../sections/Offer'
import Contact from '../sections/Contact'
import { Footer } from '../components'
import CookieConsent from 'react-cookie-consent'
import Translation from '../components/Languages/Data.json'

const Home = ({ language }) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'romanian') {
      setContent(Translation.romanian)
    }
  })
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
          language={language}
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
          buttonText='OK'
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
          declineButtonText={
            language === 'romanian'
              ? 'Nu sunt de acord'
              : language === 'slovak'
              ? 'Nesúhlasím'
              : `Don't agree`
          }
        >
          {content.cookies}
        </CookieConsent>

        <Footer />
      </div>
    </>
  )
}

export default Home
