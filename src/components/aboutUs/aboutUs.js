import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container , Row , Col ,Button} from 'react-bootstrap'
// import './aboutUsStyle.css'

const aboutUs = () => {
    return(
        <React.Fragment>
            <div id="aboutUs" style={{ backgroundColor:"rgb(4, 2, 20)" , height:"100vh"}}> 
            <br/>
            <br/>
              <div  style={{  marginTop:"25px"}}>
                <Container>
                    <section id="about"  style={{ position:"static" , display:"block"}}>
                        <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" }}>   
                            <h1 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px", backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>About Us</h1>
                        </div>
                        <Row xs={3}>
                            <Col>
                                <img src={require("../../assets/images/cloud-bg.png")} style={{width:"100%" , height:"95%" , borderRadius:"10px"}}/>
                            </Col>
                            <Col>
                                <img src={require("../../assets/images/cloud-bg.png")} style={{width:"100%" , height:"95%" , borderRadius:"10px"}}/>
                            </Col>
                            <Col>
                                <img src={require("../../assets/images/cloud-bg.png")} style={{width:"100%" , height:"95%" , borderRadius:"10px"}}/>
                            </Col>
                        </Row>
                        <Row xs={3} style={{ marginTop:"35px" }}>
                            <Col style={{ color:"black" }}>
                                <h6 style={{ textAlign:"center" , fontWeight:"bold" ,color:"#106eea" , fontSize:"18px" }}>About Us</h6>
                                <p style={{  fontSize:"17px", color:"#fff"}}>Give You The Latest News About cryptocurrency, 
                                    consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
                                    Lorem ipsum dolor sit amet .
                                    consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium,
                                    numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet .
                                </p>
                            </Col>
                            <Col>
                                <h6 style={{ textAlign:"center" , fontWeight:"bold" ,color:"#106eea" , fontSize:"18px" }}>About Us</h6>
                                <p style={{  fontSize:"17px" , color:"#fff"}}>Give You The Latest Price About cryptocurrency, 
                                    consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
                                    Lorem ipsum dolor sit amet .
                                    consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium,
                                    numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet .
                                </p>
                            </Col>
                            <Col>
                                <h6 style={{ textAlign:"center" , fontWeight:"bold" ,color:"#106eea" , fontSize:"18px" }}>About Us</h6>
                                <p style={{  fontSize:"17px" , color:"#fff"}}>Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
                                    Lorem ipsum dolor sit amet .
                                    consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium,
                                    numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet numquam Lorem ipsum dolor sit amet .
                                </p>
                            </Col>       
                        </Row>
                    </section>
                </Container>
            </div>
        </div>
        </React.Fragment>
    )
}

export default aboutUs;