const express  = require("express");
const app = express();
const { engine } = require('express-handlebars');
const User = require('./model/User');
const db = require("./model/db");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
var salt = bcrypt.genSaltSync(10);

// ROTAS
const home = require('./routes/home');
const user = require('./routes/user');
const admin = require('./routes/admin');


  app.use(session({
    secret: "cursodenode",
    resave: true,
    saveUninitialized: true
  }));

  app.use(flash());

  app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
  });

// config: Template engine
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

    app.use(express.static(__dirname + '/public'));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'handlebars');
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());


    // Rotas: HOME
    app.use('/', home);

    app.use('/home', user);

    // Rotas: ADMIN
    app.use('/admin', admin);


    app.get('*', (req, res) => {
      res.render('404');
    });


// RODANDO NA PORTA 8081
app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});