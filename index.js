const express = require('express');

const app = express();
app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.json({
    message: 'Running from IBM Cloud ☁️'
  })
})

app.listen(port,()=>{
  console.log('Listening on port: ',port);
})