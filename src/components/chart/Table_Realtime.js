import React, { useEffect, useState } from "react";
import { Table, Row , Col , Button, Card ,Container } from 'react-bootstrap';

function Table_Realtime() {

    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCryptoData();
            console.log('Table Updated');
        }, 5000);
        return () => clearInterval(interval);
    }, [cryptoData]);

    const fetchCryptoData = async () => {
        const data = await fetch('https://api.coincap.io/v2/assets?');
        const apiResponse = await data.json();
        let items_data = [];
        items_data = apiResponse['data'];
        console.log(items_data)
        setCryptoData(items_data);
    };

    return (
        <div>
        <Container>
        <section id="news" style={{ width:"100%" , height:"100%"}}   >
            <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>   
                <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8" , marginTop:"5vh"}}>News</h6>
            </div>
            <div>
                <h1>Grafik</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData.slice(0,5).map(data => {
                            return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.priceUsd}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </section>
        </Container>
        </div>
        
    );
}
export default Table_Realtime;


