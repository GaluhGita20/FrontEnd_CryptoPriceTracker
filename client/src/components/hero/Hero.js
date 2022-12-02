import React from "react";
import './HeroStyles.css'

const Hero = () => {
  return(
    <div id="hero1" className="hero" style={{ overFlow:"hidden", top:"0" }}>
      <div className="container">
        <div className="content" style={{ marginTop:"15vh" }}>
        <div style={{ width:"400px" }}> 
            <h1>Give You The Latest Info About</h1>
            <h1 className="blue">Crypto</h1>
          </div>
          <p style={{ color:"white" , marginTop:"30px" ,width:"400px"}}>Get the latest news about crypto coins, so you don't miss the news and stay updated about crypto coin information</p>
          <div><button style={{ borderRadius:"25px",background: "linear-gradient(to right, purple, #1cb5e0)" }}>Learn Mores</button></div>
        </div>
      </div>
    </div>
  )
}

export default Hero