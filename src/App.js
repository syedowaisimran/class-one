// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";
  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(api, {
        body: "Custom data",
        title: "ABH",
        userId: 1,
      })
      .then((res) => {
        console.log("Success", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <button onClick={getAPIData} variant="contained">
          GET Data
        </button>
        {data.map((e, i) => (
          <div>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
