import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from 'react-bootstrap';



function TableCrypto() {

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
        items_data = apiResponse['data'].sort((a, b) => b.priceUsd-a.priceUsd);
        console.log(items_data)
        setCryptoData(items_data);
    };


    return (
        <div>
        <Container>
        <section id="news" style={{ width:"100%" , height:"100%"}}   >
            <div className="section-title" style={{ display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , marginBottom:"10px" }}>   
                <h6 style={{ fontWeight:"bold" , color:"#106eea" , padding:"10px" , borderRadius:"30px" , backgroundcolor:"#E5F3F8" , marginTop:"5vh"}}>Price Crypto</h6>
            </div>
            <div>
            <TableContainer component={Paper}>
                <Table style={{ width:"100%"}} size="large" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Price USD</TableCell>
                        <TableCell align="left">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="left">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cryptoData.slice(0,5).map((row, index) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="left">{row.symbol}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">${row.priceUsd}</TableCell>
                        <TableCell align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </section>
        </Container>
        </div>
        
    );
}

export default TableCrypto;


