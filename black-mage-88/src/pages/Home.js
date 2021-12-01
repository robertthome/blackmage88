import React from 'react'

import './pagesStlyes/Home.css'
import Virgo from '../assets/Virgo.jpeg'

const Home = () => {
  return (
    <div className="home-container">
      <img className="home-img" src={Virgo} alt="virgo" />
    </div>
  )
}

export default Home
