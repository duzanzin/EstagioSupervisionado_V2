const express = require('express');
const app = express();
const cors = require('cors')
const User = require('./models/Users')

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
};

app.use(cors())
app.use(express.json());


app.get("/", async(req, res) => {
  res.send("Página inicial");
});

app.post("/cadastrar", async(req, res) => {
  try {
    console.log(req.body);
  
    await User.create(req.body)
    .then(()=>{
      return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso! "
      })
      
    }).catch(()=>{
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: Usuário não cadastrado com sucesso! "
      })
    })
  
    //res.send("Página cadastrar");
  } catch (err) {
    console.log(err)
  }
});

app.listen(8080, ()=>{
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})

