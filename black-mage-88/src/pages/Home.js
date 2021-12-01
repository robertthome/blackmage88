import React from 'react'

import './pagesStlyes/Home.css'
import Virgo from '../assets/Virgo.jpeg'
import Albums from '../component/Albums'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Black Mage 88</h1>
      <img className="home-img" src={Virgo} alt="virgo" />
      <Albums />
    </div>
  )
}

export default Home
