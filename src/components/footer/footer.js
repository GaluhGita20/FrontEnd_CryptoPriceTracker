import React from "react";
import { Container , Row ,Col } from "react-bootstrap";
const chart = () => {
    return(
        <div style={{ backgroundColor:"rgb(2, 2, 33)" }}>
        <Container>
            <div style={{ height:"25vh" , width:"100%" }} >
                <section id="chart">    
                <Row  style={{  color:"white" }}>
                    <Col>
                        <h6 style={{ textAlign:"center" , alignItems:"end" , marginTop:"50px" }}>c CryptoPriceTracker 2022</h6>
                    </Col>
                  
                </Row>
                </section>
            </div>
        </Container>
        </div>
    )
}
export default chart;