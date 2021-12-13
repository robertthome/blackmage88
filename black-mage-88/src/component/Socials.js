import React from 'react'
import './compStyles/Socials.css'

import { FaSpotify, FaInstagram, FaSoundcloud } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://open.spotify.com/artist/2i0qV3n6HvZUhUfXMBplse?si=67D5bqKNSI-EAkE2IGR9Dg" target="_blank">
        <FaSpotify className="social" />
      </a>
      <a href="https://music.apple.com/us/search?term=black%20mage%2088" target="_blank">
        <SiApplemusic className="social" />
      </a>
      <a href="https://www.instagram.com/mic_key_theblackmage/" target="_blank">
        <FaInstagram className="social" />
      </a>
      <a href='https://soundcloud.com/user-703614296' target="_blank">
        <FaSoundcloud className='social' />
      </a>
    </div>
  )
}

export default Socials
