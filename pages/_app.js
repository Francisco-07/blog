import '../styles/globals.css'
import LoadScreen from '../components/LoadScreen'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => setLoading(true), 500)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
