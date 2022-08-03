import { useState, useEffect } from 'react';

import axios from 'axios'

import { Button } from "@mui/material";

function App() {

  const [rates, setRates] = useState({})
  const [codes, setCodes] = useState([])

  const getRates = () => {
    axios.post('http://localhost:4321/rates', {
      withCredentials: true,
    })
    .then((result) => {
      setRates(result.data)
    })
  }

  const getCodes = () => {
    axios.post('http://localhost:4321/codes', {
      withCredentials: true,
    })
    .then((result) => {
      setCodes(result.data)
    })
  }
  
  const findCurrencyName = (code) => {
    for (let i = 0; i < codes.length; i++) {
      if (codes[i][0] === code) {
        return codes[i][1]
      }
    }
  }

  const findCurrencyCode = (name) => {
    for (let i = 0; i < codes.length; i++) {
      if (codes[i][1] === name) {
        return codes[i][0]
      }
    }
  }
  
  useEffect(() => {
    getCodes()
    getRates()
  }, [])

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Button
        variant='contained'
        // onClick={handleSubmit}
      >
        Get rates
      </Button>
    </div>
  );
}

export default App;
