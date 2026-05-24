import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('jc-theme')
    if (stored) setIsDark(stored === 'dark')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('jc-theme', isDark ? 'dark' : 'light')
    // Update body background
    document.body.style.backgroundColor = isDark ? '#080C14' : '#F8FAFC'
    document.body.style.color = isDark ? '#F8FAFC' : '#0F172A'
  }, [isDark])

  const toggle = () => setIsDark(p => !p)

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
