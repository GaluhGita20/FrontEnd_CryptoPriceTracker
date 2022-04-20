import React, { useEffect, useState } from "react";
import web3 from "web3";
import "./App.css";
import Electionabi from "./contracts/Election.json";
import Header from "./Header";
import Body from "./Body";

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

      console.log(canidate1);
      console.log(canidate2);

      console.log(canidate1id);
      console.log(canidate2id);

      console.log(canidate1votecount);
      console.log(canidate2votecount);

      setCandidate1(canidate1);
      setCandidate2(canidate2);
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
    <div>
      <Header account={Currentaccount} />
      <Body
        canidate1={Candidate1}
        canidate2={Candidate2}
        account={Currentaccount}
        votecanidate={votecanidate}
      />
    </div>
  );
}

export default App;
