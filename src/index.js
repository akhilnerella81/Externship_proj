const express = require('express');
const nodemailer = require( 'nodemailer');
const PORT = 3000;
const app = express();


app.listen(PORT,()=>{
  console.info("Server started at PORT 3000")

})
