const express = require('express');
const app = express();
const port = 8000;

const revenues_2018_per_agency_monthly = require('./figures/revenues_2018_per_agency_monthly.json')
const revenues_2018_per_agency = require('./figures/revenues_2018_per_agency.json')
const revenues_2018_per_month = require('./figures/revenues_2018_per_month.json')



app.get('/', (req, res) => {
  res.send('Welcome to Express');
});

app.get('/figures/per-agency-monthly', (req, res) => {
  res.send(revenues_2018_per_agency_monthly)
});

app.get('/figures/per-agency', (req, res) => {
  res.send(revenues_2018_per_agency)
});

app.get('/figures/per_month', (req, res) => {
  res.send(revenues_2018_per_month)
});

app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});