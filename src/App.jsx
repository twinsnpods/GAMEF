import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Aboutme from './Components/Aboutme.jsx';
import Goal from './Components/Goal.jsx';
import Media from './Components/media.jsx';   // kept lowercase like yours
import RecentEvents from './Components/RecentEvents.jsx';
import Upcoming from './Components/Upcomig.jsx'; // kept your spelling
import Voice from './Components/Voice.jsx';
import Community from './Components/Community.jsx';
import Questions from './Components/Questions.jsx';
import Footer from './Components/Footer.jsx';

// New pages
import Register from './Pages/Register.jsx';
import PastPrograms from './Pages/PastPrograms.jsx';

function App() {
  return (
    <Router basename="/GAMEF">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Aboutme />
              <Goal />
              <Media />
              <RecentEvents />
              <Upcoming />
              <Voice />
              <Community />
              <Questions />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/past-programs" element={<PastPrograms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
