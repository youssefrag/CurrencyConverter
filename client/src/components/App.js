import axios from 'axios'

import { Button } from "@mui/material";

function App() {

  const getRates = () => {
    axios.post('http://localhost:4321/rates', {
      withCredentials: true,
    })
    .then((result) => {
      console.log(result.data)
    })
  }

  const getCodes = () => {
    axios.post('http://localhost:4321/codes', {
      withCredentials: true,
    })
    .then((result) => {
      console.log(result.data)
    })
  }

  // getRates()

  getCodes()

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
