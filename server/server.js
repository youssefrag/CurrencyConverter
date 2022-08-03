const Express = require('express');
const Cors = require('cors');
const App = Express();
const PORT = 4321;
const BodyParser = require('body-parser')
const axios = require('axios').default

require('dotenv').config()

App.use(Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
}))

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

App.post('/rates', async (req, res) => {

  const rates = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/CAD`)

  res.status(200).json(rates.data.conversion_rates)
})

App.post('/codes', async (req, res) => {

  const codes = await axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)

  

  res.status(200).json(codes.data.supported_codes)
})

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});