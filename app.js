const express  = require("express");
const app = express();
const { engine } = require('express-handlebars');
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




    // Rotas admin
    app.use('/admin', admin);



// RODANDO NA PORTA 8081
app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});