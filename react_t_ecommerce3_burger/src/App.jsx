import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Food from './Components/Food'
import TopRatedMenu from './Components/TopRatedMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <TopRatedMenu />
    </>
  )
}

export default App
