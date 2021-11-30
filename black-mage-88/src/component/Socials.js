import React from 'react'
import './compStyles/Socials.css'

import { FaSpotify, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
// import { AiFillMail } from 'react-icons/ai'
import { SiApplemusic } from 'react-icons/si'

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://open.spotify.com/artist/2i0qV3n6HvZUhUfXMBplse">
        <FaSpotify className="social" />
      </a>
      <a href="https://music.apple.com/us/search?term=black%20mage%2088">
        <SiApplemusic className="social" />
      </a>
      <a href="https://www.instagram.com/mic_key_theblackmage/">
        <FaInstagram className="social" />
      </a>
      <a href="https://www.facebook.com/mickey.prigatano">
        <FaFacebookSquare className="social" />
      </a>
    </div>
  )
}

export default Socials
