const express  = require("express");
const app = express();
const { engine } = require('express-handlebars');
// const Post = require('./Model/Post');
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

    
    app.get('/sobre', (req, res) => {
      res.render('sobre')
    })




    // ROTAS: admin
  
    // no parametro get eu escrevo a minha url: ex.: users/list
    app.get('/admin/users/create', (req, res) => {
      res.render('admin/users/create') //caminho das pastas
    });

    app.get('/admin/users/list', (req, res) => {
      res.render('admin/users/list') // caminho das pastas
    })

    // CREATE USERS ( users system )
    app.post('/admin/users/list', (req, res) => {
        Users.create({
        userName: req.body.nome,
        userEmail: req.body.email,
        userPassword: req.body.password,
        // user_contact: req.body.contact
        }).then(() => {
            res.send('Usuário cadastrado com sucesso!');
        }).catch((erro) => {
            res.send('Usuário não cadastrado: ' + erro);
        });
    });

    
  

    // Rotas admin
    app.use('/admin', admin);



// RODANDO NA PORTA 8081
app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});