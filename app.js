const express  = require("express");
const app = express();
const { engine } = require('express-handlebars');
const Post = require('./Model/Post');
const Users = require('./Model/Users');
const db = require("./Model/db");
const admin = require('./routes/admin');
const path = require('path');




// config
    // Template engine
    app.engine(
        "handlebars",
        engine({
          defaultLayout: "main",
          runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
          },
        })
      );
      


    // acessa meus arquivos do bootstrap
    app.use(express.static(__dirname + '/public'));
    // minha página de views (diretório)
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'handlebars');

    app.use(express.urlencoded({extended:false}));
    app.use(express.json());


    // exibe a msg de sucesso ou erro nessa página (rota)
    app.post('/add', (req, res) => {
      Post.create({
        titulo:  req.body.titulo,
        conteudo: req.body.conteudo
      }).then(() => {
          res.send('Post criado com sucesso!');
      }).catch((erro) => {
          res.send('Houve um erro: ' + erro);
      })
    });
  

    app.get('/formularios', function(req, res) {
      res.render('formularios')
    })


    // CREATE USERS
    app.post('/admin/users/list', (req, res) => {
      Users.create({
        user_name: req.body.name,
        user_email: req.body.email,
        user_password: req.body.password,
        user_contact: req.body.contact
      }).then(() => {
        res.send('Usuário cadastrado com sucesso!');
      }).catch((erro) => {
        res.send('Usuário não cadastrado: ' + erro);
      });
    })

    app.get('/users/create', function(req, res) {
      res.render('list')
    })

  


    // Rotas admin
    app.use('/admin', admin);



// RODANDO NA PORTA 8081
app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});