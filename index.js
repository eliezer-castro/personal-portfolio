const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
  return res.render('index');
})

app.listen(3333, ()=>{
  console.log('🚀 Back-end started!')
})