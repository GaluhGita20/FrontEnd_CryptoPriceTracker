import React from "react";
import Nav from "./navbar/Navbar"
import Heros from "./hero/Hero"

const navbarHeros =()=>{
    return(
        <div class="app">
            <Nav/>
            <Heros/> 
        </div>
    );
}

export default navbarHeros