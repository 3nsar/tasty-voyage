import React from 'react'
import "./Info2.scss"
import people from "../../images/people/people2.svg"
import { Parallax } from 'react-parallax'


const Info2 = () => {
  return (
  
    <div className='info2-container'>
      <div className="info2-content">
        <div className="info2-text">
          <h1>INSPIRING GOOD THROUGH TASTY GOODNESS</h1>
          <p>We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.</p>
       </div>
       <img src={people} alt="pic" height="300px"/>
      </div>
    </div>

  )
}

export default Info2