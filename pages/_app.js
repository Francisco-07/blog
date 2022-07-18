import '../styles/globals.css'
import LoadScreen from '../components/LoadScreen'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => setLoading(true), 3000)
  }, [])

  return <>{loading ? <Component {...pageProps} /> : <LoadScreen />}</>
}

export default MyApp
