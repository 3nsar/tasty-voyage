import React from 'react'
import './Footer.scss'; // Import the hero.scss file
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-emojis">
            <ul>
              <li><FaFacebook/></li>
              <li><FaInstagram/></li>
              <li><FaSquareXTwitter/></li>
            </ul>
        </div>
         <div className="footer-text">
            <p>© 2023 TASTY VOYAGE</p>
         </div>
    </div>
  )
}

export default Footer