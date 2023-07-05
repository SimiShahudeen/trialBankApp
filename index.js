const express = require('express');
// const cors = require('cors');
const app = express();

// app.use(cors());
app.use(express.json());

const logics = require('./service/logic')

app.post('/register', (req, res) => {
  logics.register(req.body.acno,req.body.psw).then(result=>{
    res.json({
      result:result,
      error:"asynchronous error"
    })
  })


})

// app.post('/register', (req,res)=>{
//   res.status(req.body.statusCode).json({
//     message:"successful",
//     accountNumber:req.body.acno
//   })
// })


app.listen(3000, () => {
  console.log('Server started on port 3000');
});































