const Express = require('express');
const Cors = require('cors');
const App = Express();
const PORT = 4321;
const BodyParser = require('body-parser')
// const axios = require('axios').default

require('dotenv').config()

App.use(Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
}))

App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

App.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});