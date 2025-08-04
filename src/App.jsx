
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Aboutme from './Components/Aboutme.jsx'
import Goal from './Components/Goal.jsx'
import Media from './Components/media.jsx'
import RecentEvents from './Components/RecentEvents.jsx'
import Upcoming from './Components/Upcomig.jsx'
import Voice from './Components/Voice.jsx'
import Community from './Components/Community.jsx'
import Questions from './Components/Questions.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Aboutme />
        <Goal />
        <Media />
        <RecentEvents />
        <Upcoming />
        <Voice />
        <Community />
        <Questions />
        <Footer />
      </div>
    </>
  )
}

export default App
