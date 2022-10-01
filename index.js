const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const rotas= require('./controller/rotas');


app.get('/',(req,res)=>{
console.log("rota raiz");
res.send('rota raiz');
});

app.use('/', rotas);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});