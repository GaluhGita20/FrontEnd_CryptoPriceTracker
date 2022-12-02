import React, { useState } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";

const Body = ({ canidate1, canidate2, canidate3, canidate4,canidate5, account, votecanidate }) => {
  const [Canidate, setCandidate] = useState("");
  const onchange = (e) => {
    setCandidate(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (Canidate.id !== 0) votecanidate(Number(Canidate));
    else window.alert("error");
  };

  return (
    <div className="table1 mt-5">
      <Container>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Pilihan Crypto</th>
              <th>Jumlah Like</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{canidate1.id}</td>
              <td>{canidate1.name}</td>
              <td>{canidate1.voteCount}</td>
            </tr>
            <tr>
              <td>{canidate2.id}</td>
              <td>{canidate2.name}</td>
              <td>{canidate2.voteCount}</td>
            </tr>
            <tr>
              <td>{canidate3.id}</td>
              <td>{canidate3.name}</td>
              <td>{canidate3.voteCount}</td>
            </tr>
            <tr>
              <td>{canidate4.id}</td>
              <td>{canidate4.name}</td>
              <td>{canidate4.voteCount}</td>
            </tr>
            <tr>
              <td>{canidate5.id}</td>
              <td>{canidate5.name}</td>
              <td>{canidate5.voteCount}</td>
            </tr>
          </tbody>

          <br></br>
        </Table>
      </Container>

      <Container>
        <div className="my-3 ml-auto text-left" style={{ width: "100%" }}>
          <h5>Pilih Crypto : </h5>
          <form onSubmit={onsubmit}>
            <select
              name="candidate"
              className="form-control"
              onChange={onchange}
            >
              <option defaultValue value="">
                Select
              </option>
              <option value="1">{canidate1.name}</option>
              <option value="2">{canidate2.name}</option>
              <option value="3">{canidate3.name}</option>
              <option value="4">{canidate4.name}</option>
              <option value="5">{canidate5.name}</option>
            </select>
            <button className="btn-primary mt-2 btn-md w-100">
              Pilih Crypto{""}
            </button>
          </form>
        </div>
      </Container>

      <p className="text1 text-center ">Akun Address : {account}</p>
    </div>
  );
};

export default Body;
