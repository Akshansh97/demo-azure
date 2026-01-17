import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  //akshanshdemo-fkd8f7ffa2eae4bw.southindia-01.azurewebsites.net

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://akshanshdemo-fkd8f7ffa2eae4bw.southindia-01.azurewebsites.net",
      );
      setResult(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
  return <div>{result}</div>;
};

export default App;
