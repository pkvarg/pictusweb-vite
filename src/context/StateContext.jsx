import React, { createContext, useContext, useState, useEffect } from 'react'
const Context = createContext()

export const StateContext = ({ children }) => {
  const [language, setLanguage] = useState('slovak')
  const [botsCount, setBotsCount] = useState(0)

  useEffect(() => {
    const LocalStorageLanguage = window.localStorage.getItem('language')
    if (LocalStorageLanguage !== null)
      setLanguage(JSON.parse(LocalStorageLanguage))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  return (
    <Context.Provider
      value={{ language, setLanguage, botsCount, setBotsCount }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
