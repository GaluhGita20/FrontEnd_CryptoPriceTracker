import { FaHome , FaPhone , FaMailBulk } from 'react-icons/fa'
import React from "react";
import { Container , Row ,Col } from "react-bootstrap";
const chart = () => {
    return(
        <React.Fragment>
            <div id="contact" style={{ backgroundColor:"rgb(4, 2, 20)" , height:"100vh"}} >
            <br/>
            <br/>
            <br/>

        <Container>
            <div id="contact" style={{ height:"100vm" , width:"100%"  }} >
                <section id="chart">
                    <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center"}}>   
                        <h6 style={{ fontWeight:"bold" , color:"#fff" , padding:"10px" , borderRadius:"30px" , backgroundColor:"rgb(4, 2, 20)", marginTop:"30px" , marginBottom:"80px" }}>Contact</h6>
                    </div>
                    <Row xs={3}>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <FaHome style={{ color:"#fff" , fontSize:"100px" , border:"4px solid #106eea" , borderRadius:"50px" , padding:"10px"}}>
                            </FaHome>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <FaPhone style={{ color:"#fff" , fontSize:"100px" , border:"4px solid #106eea" , borderRadius:"50px" , padding:"10px"}}>
                            </FaPhone>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <FaMailBulk style={{ color:"#fff" , fontSize:"100px" , border:"4px solid #106eea" , borderRadius:"50px" , padding:"10px"}}>
                            </FaMailBulk>
                        </Col>
                    </Row>
                    <Row xs={3}>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Visit Us</h6>
                            <p style={{ textAlign:"center" , color:"#fff" }}>Butuh bantuan ? Datangi kami sekarang juga. </p>
                                <h6 style={{ fontWeight:"bold" , color:"#fff" , fontSize:"20px",  padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginBottom:"30px"  }}>Jimbaran , Bali</h6>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Phone</h6>
                            <p style={{ textAlign:"center" , color:"#fff" }}>Info lebih lanjut, hubungi kontak yang tertera dibawah ini</p>
                                <h6 style={{ fontWeight:"bold" , color:"#fff" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8",fontSize:"20px", marginBottom:"30px" }}>+6282 339 617 442</h6>
                        </Col>
                        <Col style={{  display:"flex" , flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" ,alignItems:"center"}}>
                            <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Mail</h6>
                            <p style={{ textAlign:"center" , color:"#fff"   , fontSize:"15px"  }}>Untuk kerja sama, silahkan hubungi kami melalui email yang tertera dibawah ini</p>
                                <h6 style={{ fontWeight:"bold" , color:"#fff" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", fontSize:"20px",  marginBottom:"30px" }}>admin@gmail.com</h6>
                        </Col>
                    </Row>
                </section>
            </div>
        </Container>
    </div>
    </React.Fragment>
    )
}
export default chart;