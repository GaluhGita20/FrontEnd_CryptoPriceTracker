import React from "react";
import './HeroStyles.css'

const Hero = () => {
  return(
    <div className="hero" style={{ overFlow:"hidden", top:"0" }}>
      <div className="container">
        <div className="content" style={{ marginTop:"15vh" }}>
          <h1>Cryptocurrency</h1>
          <h1 className="blue">Tracker</h1>
          <p style={{ color:"white" }}>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
            Lorem ipsum dolor sit amet .</p>
          <div><button>Learn More</button></div>
        </div>
      </div>
    </div>
  )
}

export default Hero