import Line from "../LineChart";
import { useState } from "react";
import React from "react";
import { Container,Row , Col , ButtonGroup} from "react-bootstrap";

const Grafik = () => {
    const [cryptoData , setCryptoData] = useState({
        labels:["13:00" ,"14:00" , "15:00" , "16:00" , "17:00" ,"18:00"],
        datasets:[{
            label:"Bitcoin",
            data:[1,15,3,8,28,25],
            borderColor:[
                'blue', 
            ],
            backgroundColor:'blue',
            },
            {
                label:"Litecoin",
                data:[1,3,6,2,30,45],
                borderColor:[
                    'orange', 
                ],
                backgroundColor:'orange',
            },
            {
                label:"Etherium",
                data:[11,13,16,12,20,25],
                borderColor:[
                    'purple', 
                ],
                backgroundColor:'purple',
            },
            {
                label:"Dogecoin",
                data:[1,23,26,22,10,35],
                borderColor:[
                    'black', 
                ],
                backgroundColor:'black',
            },
        ],
    });

    return(
        <Container id="chart" style={{display:"block", position:"static"}}>
            <div style={{ height:"100%" , width:"100%" }} >
                <section id="chart">
                    <Row>
                        <Col style={{ padding:"120px" }}>
                            <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" }}>   
                                <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8", marginTop:"30px" , marginBottom:"30px" }}>Chart</h6>
                                <Line lineData={cryptoData}></Line>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        </Container>
    )
}
export default Grafik;