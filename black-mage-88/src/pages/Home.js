import React from 'react'

import './pagesStlyes/Home.css'
import Virgo from '../assets/Virgo.jpeg'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">BLACK MAGE 88</h1>
      <img className="home-img" src={Virgo} alt="virgo" />
    </div>
  )
}

export default Home
