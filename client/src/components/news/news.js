import React from "react"
import {Row , Col , Button, Card ,Container} from 'react-bootstrap'

const news = () => {
    return(
        <React.Fragment>
            <div id="news" style={{ backgroundColor:"rgb(4, 2, 20)" , height:"100vh"}}>
            <br/>
            <br/>

    <div>
        <Container>
        <section id="news" style={{  position:"static" , display:"block"}}   >
            <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>   
                <h1 style={{ fontWeight:"bold" , fontSize:"20px", color:"#fff" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8" , marginTop:"5vh"}}>News</h1>
            </div>
            <Row xs={3}>
                <Col className="mt-3" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>
                    <Card style={{ width: '20rem' , boxShadow:" 0 1rem 2rem hsl(10 200% 5% / 20%)" , border:"1px solid #106eea", background:" rgb(4, 2, 20)" }}>
                        <Card.Img variant="top" src={require('./news1-bg.jpeg') } />
                        <p style={{ fontSize:"15px" , position:"absolute" , top:"150px" ,left:"12px", color:"white" ,fontWeight:"500" , padding:"3px" ,width:"100px" , borderRadius:"2px"   }}>07 Okt 2022</p>
                        <Card.Body>
                            <Card.Title><a href="" style={{ textDecoration:"none", fontSize:"18px" }}>Kripto Segitu Aja, Bitcoin Bertahan di US$ 20.000</a></Card.Title>
                           
                            <Card.Text style={{ fontSize:"15px",color:"#fff" }}>
                            Data dari CoinMarketCap pada pukul 09:32 WIB, Bitcoin naik 0,48% ke posisi harga US$ 20.326,85/koin atau setara dengan Rp 308.968.120/koin (asumsi kurs Rp 15.200/US$).
                            Sedangkan untuk Ethereum menguat 1,24% ke posisi US$ 1.373,18/koin atau Rp 20.872.336/koin.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-3" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>
                    <Card style={{ width: '20rem' , boxShadow:" 0 1rem 2rem hsl(10 20% 0% / 20%)" , border:"1px solid #106eea", background:" rgb(4, 2, 20)" }}>
                        <Card.Img variant="top" src={require('./news22-bg.jpg') } />
                        <p style={{ fontSize:"15px" , position:"absolute" , top:"150px" ,left:"12px", color:"white" ,fontWeight:"500" , padding:"3px" ,width:"100px" , borderRadius:"2px"   }}>06 Okt 2022</p>
                        <Card.Body>
                            <Card.Title><a href="" style={{ textDecoration:"none", fontSize:"18px" }}>Popularitas Kripto di Amerika Serikat Menurun Akibat Crypto Winter</a></Card.Title>
                           
                            <Card.Text style={{ fontSize:"15px" , color:"#fff" }}>
                            Menurut survei Bankrate September, pada 2022, hanya sekitar 21 persen orang Amerika yang merasa nyaman berinvestasi dalam cryptocurrency. 
                            Itu turun dari 35 persen pada 2021. Penurunan ini terjadi di tengah kondisi yang disebut crypto winter.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-3" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>
                    <Card style={{ width: '20rem' , boxShadow:" 0 1rem 2rem hsl(10 20% 0% / 20%)" , border:"1px solid #106eea", background:" rgb(4, 2, 20)" }}>
                        <Card.Img variant="top" src={require('./news3-bg.jpg') } />
                        <p style={{ fontSize:"15px" , position:"absolute" , top:"150px" ,left:"12px", color:"white" ,fontWeight:"500" , padding:"3px" ,width:"100px" , borderRadius:"2px"   }}>05 Okt 2022</p>
                        <Card.Body>
                            <Card.Title><a href="" style={{ textDecoration:"none", fontSize:"18px" }}>Prediksi Dolar AS Bakal Anjlok pada 2023, Penulis Ini Lihat Peluang Bitcoin</a></Card.Title>
                           
                            <Card.Text style={{ fontSize:"15px" , color:"#fff" }}>
                            Penulis terkenal dari buku Rich Dad Poor Dad, Robert Kiyosaki, meramalkan dolar AS akan jatuh pada Januari tahun depan. 
                            Dia juga menyebut bitcoin sebagai salah satu investasi yang cocok untuk dibeli karena The Fed terus menaikkan suku bunga.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    </Container>
</div>
</div>
</React.Fragment>
    )
}

export default news;