import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function ThemeProvider({ children }) {
  const [filter, setFilter] = useState(false)
  const [listFilter, setListFilter] = useState(true)

  return (
    <Context.Provider value={{ filter, setFilter, listFilter, setListFilter }}>
      {children}
    </Context.Provider>
  )
}

export function useThemeContext() {
  return useContext(Context)
}
