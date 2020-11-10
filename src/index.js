const express = require('express');
const app = express();
const port = 8080;
const getTheGoods = require('./video');

app.use(express.static('wwwroot'));
app.use(express.json());

app.get('/api/video', async (req, res) => {
  // get a video api key, sessionid & token
  const theGoods = await getTheGoods();
  res.status(200).send(theGoods);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});