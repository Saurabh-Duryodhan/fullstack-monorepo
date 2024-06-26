import { useEffect } from 'react'
import './App.css'

function App() {
  const getUser = async () => {
    const response = await fetch('/api/data')
    const data = await response.json()
    return data
  }

  useEffect(() => {
    getUser(data => console.log(data))
  }, [])

  return (
    <>
      <h1>Fullstack MonoRepo Demo</h1>
    </>
  )
}

export default App
