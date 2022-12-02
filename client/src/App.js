import React, { useEffect, useState } from "react";
import web3 from "web3";
import "./App.css";
import Electionabi from "./contracts/Election.json";
import Header from "./Header";
import Body from "./Body";
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/aboutUs/aboutUs';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import CoinMarkets from "./components/table/CoinMarkets";
import ContentHeader from "./components/additional/ContentHeader";
import Container from '@mui/material/Container';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DoughnutChart from './components/charts/DoughnutChart';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const [Currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [Electionsn, SetElectionsn] = useState();
  const [Candidate1, setCandidate1] = useState();
  const [Candidate2, setCandidate2] = useState();
  const [Candidate3, setCandidate3] = useState();
  const [Candidate4, setCandidate4] = useState();
  const [Candidate5, setCandidate5] = useState();


  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setloader(true);
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);

    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      );

      const canidate1 = await election.methods.candidates(1).call();
      const canidate1id = canidate1.id;
      const canidate1votecount = canidate1.voteCount;

      const canidate2 = await election.methods.candidates(2).call();
      const canidate2id = canidate2.id;
      const canidate2votecount = canidate2.voteCount;

      const canidate3 = await election.methods.candidates(3).call();
      const canidate3id = canidate3.id;
      const canidate3votecount = canidate3.voteCount;

      const canidate4 = await election.methods.candidates(4).call();
      const canidate4id = canidate4.id;
      const canidate4votecount = canidate4.voteCount;

      const canidate5 = await election.methods.candidates(5).call();
      const canidate5id = canidate5.id;
      const canidate5votecount = canidate5.voteCount;

      console.log(canidate1);
      console.log(canidate2);
      console.log(canidate3);
      console.log(canidate4);
      console.log(canidate5);


      console.log(canidate1id);
      console.log(canidate2id);
      console.log(canidate3id);
      console.log(canidate4id);
      console.log(canidate5id);


      console.log(canidate1votecount);
      console.log(canidate2votecount);

      setCandidate1(canidate1);
      setCandidate2(canidate2);
      setCandidate3(canidate3);
      setCandidate4(canidate4);
      setCandidate5(canidate5);
      SetElectionsn(election);
      setloader(false);
    } else {
      window.alert("Error");
    }
  };

  const votecanidate = async (canidateid) => {
    setloader(true);
    await Electionsn.methods
      .vote(canidateid)
      .send({ from: Currentaccount })
      .on("transactionhash", () => {
        console.log("succes");
      });
    setloader(false);
  };

  if (loader) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app'>
      
      <Navbar/>
      <Hero/>
      <Box backgroundColor="#fff">
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ContentHeader/>
            </Grid>
            <Grid item xs={12}>
              <CoinMarkets />
            </Grid>
            <Grid item xs={12}>
              <BarChart/>      
            </Grid>
            <Grid item md={4} xs={12}>
              <DoughnutChart />
            </Grid>
            <Grid item md={8} xs={12}>
                <LineChart />
            </Grid>
            <Grid item xs={12}>
              <Body
                canidate1={Candidate1}
                canidate2={Candidate2}
                canidate3={Candidate3}
                canidate4={Candidate4}
                canidate5={Candidate5}
                account={Currentaccount}
                votecanidate={votecanidate}
              />
            </Grid>
          </Grid>
        </Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            {/* <Route  path="/news" component={News} /> */}
              <News/>
              <BrowserRouter>
              {/* <Header /> */}
              {/* <Route  path="/news" component={News} /> */}
              {/* <Route exact path="/contact" component={Contact} /> */}
              </BrowserRouter>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AboutUs/> 
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Contact/> 
            </Grid>
          </Grid>
      </Box>
      <Footer/>
    </div>
  );
}

export default App;
