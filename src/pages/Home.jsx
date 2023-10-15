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
import { useStateContext } from '../context/StateContext'
import { getAnalytics } from 'firebase/analytics'
import axios from 'axios'
import { app } from '../App'

const Home = () => {
  const { language } = useStateContext()
  const [content, setContent] = useState({})
  const [cookieAccept, setCookieAccept] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseVisitorsDeclined = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.como/api/visitors/pic/increase`,
      // `http://localhost:2000/api/visitors/pic/increase`,
      config
    )
    console.log('vstrsDec:', data.visitorsDeclined)
  }

  const increaseVisitorsAgreed = async () => {
    const { data } = await axios.put(
      `https://api.pictusweb.com/api/visitors/pic/agree/increase`,
      // `http://localhost:2000/api/visitors/pic/agree/increase`,
      config
    )
    console.log('vstrsAgr:', data.visitorsAgreed)
  }

  // Initialize Firebase
  if (cookieAccept) {
    // const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
  }

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
            background: '#834daf',
            color: '#ffffff',
            fontSize: '19px',
            textAlign: 'start',
          }}
          buttonStyle={{
            background: '#1d9f2f',
            color: '#fff',
            fontSize: '18px',
            paddingTop: '12.5px',
          }}
          buttonText='OK'
          expires={365}
          enableDeclineButton
          onDecline={() => {
            setCookieAccept(false)
            increaseVisitorsDeclined()
          }}
          declineButtonStyle={{
            background: 'red',
            color: '#fff',
            fontSize: '18px',
            paddingTop: '12.5px',
          }}
          declineButtonText={
            language === 'romanian'
              ? 'Nu sunt de acord'
              : language === 'slovak'
              ? 'Nesúhlasím'
              : `Don't agree`
          }
          onAccept={() => {
            setCookieAccept(true)
            increaseVisitorsAgreed()
          }}
        >
          {content.cookies}
        </CookieConsent>
        <Footer />
      </div>
    </>
  )
}

export default Home
