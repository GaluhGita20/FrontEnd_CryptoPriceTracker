import { FaHome , FaPhone , FaMailBulk } from 'react-icons/fa'

import React from "react";
import { Container , Row ,Col } from "react-bootstrap";
const chart = () => {
    return(
        <React.Fragment>
            <div id="contact"></div>
            <br/>
            <br/>
            <br/>

        <Container>

            <div id="contact" style={{ height:"100vm" , width:"100%" }} >
                <section id="chart">
                    <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center"}}>   
                        <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"80px" }}>Contact</h6>
                    </div>
                    <Row xs={3}>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <FaHome style={{ color:"#106eea" , fontSize:"100px" , border:"4px solid #106eea" , borderRadius:"50px" , padding:"10px"}}>
                            </FaHome>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <FaPhone style={{ color:"#106eea" , fontSize:"100px" , border:"4px solid #106eea" , borderRadius:"50px" , padding:"10px"}}>
                            </FaPhone>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <FaMailBulk style={{ color:"#106eea" , fontSize:"100px" , border:"4px solid #106eea" , borderRadius:"50px" , padding:"10px"}}>
                            </FaMailBulk>
                        </Col>
                    </Row>
                    <Row xs={3}>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Visit Us</h6>
                            <p style={{ textAlign:"center" }}>Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
                                Lorem ipsum dolor sit amet </p>
                                <h6 style={{ fontWeight:"bold" , color:"#106eea" , fontSize:"20px",  padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginBottom:"30px"  }}>Jimbaran , Bali</h6>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Phone</h6>
                            <p style={{ textAlign:"center" }}>Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
                                Lorem ipsum dolor sit amet </p>
                                <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8",fontSize:"20px", marginBottom:"30px" }}>+6282 339 617 442</h6>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Mail</h6>
                            <p style={{ textAlign:"center" }}>Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Praesentium, numquam? consectetur adipisicing elit. Praesentium, numquam
                                Lorem ipsum dolor sit amet </p>
                                <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", fontSize:"20px",  marginBottom:"30px" }}>Bjorka@gmail.com</h6>
                        </Col>
                    </Row>
                </section>
            </div>
        </Container>
        </React.Fragment>
    )
}
export default chart;