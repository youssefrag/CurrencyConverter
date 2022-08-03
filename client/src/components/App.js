import axios from 'axios'

import { Button } from "@mui/material";

function App() {

  const handleSubmit = () => {
    axios.post('http://localhost:4321/rates', {
      withCredentials: true,
    })
    .then((result) => {
      console.log(result.data)
    })
  }

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Button
        variant='contained'
        onClick={handleSubmit}
      >
        Get rates
      </Button>
    </div>
  );
}

export default App;
