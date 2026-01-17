import React from 'react'
import axios from 'axios'
import { useState } from 'react';


const App = () => {
const [result,setResult]=useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      setResult(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  return (
    <div>{result}</div>
  )
}

export default App