import React from "react"
import {Row , Col , Button, Card ,Container} from 'react-bootstrap'

const news = () => {
    return(
        <React.Fragment>
            <div id="news"></div>
            <br/>
            <br/>

    <div>
        <Container>
        <section id="news" style={{ width:"100%" , height:"100%", position:"static" , display:"block"}}   >
            <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>   
                <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8" , marginTop:"5vh"}}>News</h6>
            </div>
            <Row xs={3}>
                <Col className="mt-3" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>
                    <Card style={{ width: '20rem' , boxShadow:" 0 1rem 2rem hsl(10 200% 5% / 20%)" , border:"1px solid hsl(0 0% 83%)", background:" hsl(0 0% 100%)" }}>
                        <Card.Img variant="top" src={require('./cyber-bg.png') } />
                        <p style={{ fontSize:"15px" , position:"absolute" , top:"163px" ,left:"12px", color:"white" ,fontWeight:"500" , padding:"3px" ,width:"100px" , borderRadius:"2px"   }}>26 Sept 2022</p>
                        <Card.Body>
                            <Card.Title><a href="" style={{ textDecoration:"none", fontSize:"18px" }}>Card Title</a></Card.Title>
                           
                            <Card.Text style={{ fontSize:"15px" }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-3" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>
                    <Card style={{ width: '20rem' , boxShadow:" 0 1rem 2rem hsl(10 20% 0% / 20%)" , border:"1px solid hsl(0 0% 83%)", background:" hsl(0 0% 100%)" }}>
                        <Card.Img variant="top" src={require('./cyber-bg.png') } />
                        <p style={{ fontSize:"15px" , position:"absolute" , top:"163px" ,left:"12px", color:"white" ,fontWeight:"500" , padding:"3px" ,width:"100px" , borderRadius:"2px"   }}>2 Aug 2022</p>
                        <Card.Body>
                            <Card.Title><a href="" style={{ textDecoration:"none", fontSize:"18px" }}>Card Title</a></Card.Title>
                           
                            <Card.Text style={{ fontSize:"15px" }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-3" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>
                    <Card style={{ width: '20rem' , boxShadow:" 0 1rem 2rem hsl(10 20% 0% / 20%)" , border:"1px solid hsl(0 0% 83%)", background:" hsl(0 0% 100%)" }}>
                        <Card.Img variant="top" src={require('./cyber-bg.png') } />
                        <p style={{ fontSize:"15px" , position:"absolute" , top:"163px" ,left:"12px", color:"white" ,fontWeight:"500" , padding:"3px" ,width:"90px" , borderRadius:"2px"   }}>2 Aug 2022</p>
                        <Card.Body>
                            <Card.Title><a href="" style={{ textDecoration:"none", fontSize:"18px" }}>Card Title</a></Card.Title>
                           
                            <Card.Text style={{ fontSize:"15px" }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    </Container>
</div>
</React.Fragment>
    )
}

export default news;