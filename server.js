const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const redisClient = require('./redis-client');

// app.get('/store/:key', async (req, res) => {
//   const { key } = req.params;
//   const value = req.query;
//   await redisClient.setAsync(key, JSON.stringify(value));
//   return res.send('Success');
// });

// app.get('/:key', async (req, res) => {
//   const { key } = req.params;
//   const rawData = await redisClient.getAsync(key);
//   return res.json(JSON.parse(rawData));
// });

router.get('/', (req, res) => {
  return res.send('Hello world5');
});

router.get('/prueba', (req, res) => {
  return res.send('Hello world10');
});

router.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use('/', router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
