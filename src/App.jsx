import { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Home,
  OurProjects,
  About,
  Gdpr,
  TradeRules,
  Counter,
  ErrorPage,
} from './pages'
import { ScrollToTop } from './components'
import './App.css'
import { StateContext } from './context/StateContext'
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// }

// console.log(
//   'apiK:',
//   firebaseConfig.apiKey,
//   firebaseConfig.authDomain,
//   firebaseConfig.projectId,
//   firebaseConfig.storageBucket,
//   firebaseConfig.messagingSenderId,
//   firebaseConfig.appId,
//   firebaseConfig.measurementId
// )

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

function App() {
  // const ref = useRef(null)

  return (
    <BrowserRouter>
      <StateContext>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/en' element={<Home />} />
          <Route path='/projects' element={<OurProjects />} />
          <Route path='/about' element={<About />} />
          <Route path='/gdpr' element={<Gdpr />} />
          <Route path='/trade-rules' element={<TradeRules />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <ScrollToTop />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
