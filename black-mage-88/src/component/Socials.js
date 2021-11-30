import React from 'react'
import './compStyles/Socials.css'

import { FaSpotify, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { SiApplemusic } from 'react-icons/si'

const Socials = () => {
  return (
    <div className="socials-container">
      <FaSpotify className="social" />
      <SiApplemusic className="social" />
      <FaInstagram className="social" />
      <FaFacebookSquare className="social" />
      <AiFillMail className="social" />
    </div>
  )
}

export default Socials
