import { useState, useEffect } from 'react';

import axios from 'axios'

import { Button, Box, Typography, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    paddingTop: '110px',
    paddingBottom: '110px',
    paddingLeft: '150px',
    paddingRight: '150px',
    backgroundColor: '#D3D3D3',
  },
  mainApp: {
    width: '100%',
    border: '2px solid',
    height: '500px',
    borderRadius: '50px',
    backgroundColor: 'white',
  }
});

function App() {

  const classes = useStyles();

  const [rates, setRates] = useState({})
  const [codes, setCodes] = useState([])
  const [fromCurrency, setFromCurrency] = useState('CAD')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromAmount, setFromAmount] = useState(1)

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
    <div className={classes.root}>
      <Box
        className={classes.mainApp}
      >

      </Box>
    </div>
  );
}

export default App;
