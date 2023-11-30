import React from 'react'
import "./Info3.scss"
import people from "../../images/people/people3.svg"
import { Parallax } from 'react-parallax'


const Info3 = () => {
  return (
  
    <div className='info3-container'>
      <div className="info3-content">
      <img src={people} alt="pic" height="200px"/>
        <div className="info3-text">
          <h1>POWERED BY POSITIVITY</h1>
          <p>We’re not crusading or going up against an industry. <br />We’re for; for flavour, for fun, for what’s possible.</p>
       </div>
      </div>
    </div>

  )
}

export default Info3