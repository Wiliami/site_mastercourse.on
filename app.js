const express  = require("express");
const app = express();
const { engine } = require('express-handlebars');
const User = require('./model/User');
const db = require("./model/db");
const admin = require('./routes/admin');
const teste = require('./routes/cadastro');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
var salt = bcrypt.genSaltSync(10);


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


    app.use(express.static(__dirname + '/public'));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'handlebars');
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    app.get('/', (req, res) => {
      res.render('home')
    })

    app.get('/pagina-cursos', (req, res) => {
      res.render('pagina-cursos')
    })

    app.get('/forgot-password', (req, res) => {
      res.render('forgot-password')
    })

    app.get('/area-membro/meus-cursos', (req, res) => {
      res.render('area-membro/meus-cursos')
    })


    app.get('/admin/users/create', (req, res) => {
      res.render('admin/users/create')
    })

    app.get('/admin/users/list', (req, res) => {
      res.render('admin/users/list') // caminho das pastas
    })

    app.get('/admin/users/update', (req, res) => {
      res.render('admin/users/update')
    })

    app.get('/admin/users/delete', (req, res) => {
      res.render('admin/users/delete')
    })



    app.get('/area-membro/area-curso', (req, res) => {
      res.render('area-membro/area-curso');
    })

    app.get('/cursos-lancamentos', (req, res) => {
      res.render('cursos-lançamentos');
    })
    
    app.get('/user-settings', (req, res) => {
      res.render('area-membro/user-settings');
    })

    app.get('/perfil-user', (req, res) => {
      res.render('area-membro/perfil-user');
    })

    app.get('/contatos', (req, res) => {
      res.render('contatos');
    })

    app.get('/area-membro/purchase-user', (req, res) => {
      res.render('area-membro/purchase-user');
    })

    app.get('/area-membro/course-pending', (req, res) => {
      res.render('area-membro/course-pending');
    })

    app.get('/area-membro/course-completed', (req, res) => {
      res.render('area-membro/course-completed');
    })

    app.get('/area-membro/user-profile', (req, res) => {
      res.render('area-membro/user-profile');
    })

    app.get('/help', (req, res) => {
      res.render('help');
    })


    // app.get('/', (req, res) => {
    //   res.render('');
    // })
    




    // DASHBOARD
    app.get('/dashboard', (req, res) => {
      res.render('dashboard')
    })

    app.get('/dashboardTest', (req, res) => {
      res.render('dashboardTest')
    })

    app.get('/esqueci-senha', (req, res) => {
      res.render('forgot')
    })


    app.get('/checkout', (req, res) => {
      res.render('checkout')
    })

    // LOGIN  TESTE
    app.get('/login', (req, res) => {
      res.render('login')
    })

    // ROTA LOGIN: admin
    app.get('/admin', (req, res) => {
      res.render('login/admin')
    })

    // ROTA LOGIN: alunos
    app.get('/alunos', (req, res) => {
      res.render('login/alunos')
    })

    




    app.get('/cadastro', (req, res) => {
      res.render('cadastro');
    });


    app.post('/dashboard', (req, res) => {
      User.create({
        userName: req.body.nome,
        userEmail: req.body.email,
        userPassword: bcrypt.hashSync(req.body.password, salt),
      }).then(() => {
        // res.send('<div class="alert alert-primary" role="alert">Usuário cadastrado com sucesso!</div>')
        res.status(200).json({ success: 'Usuário cadastrado com sucesso!'})
        // bcrypt.compareSync('12345678', userPassword); // true
      }).catch((erroMessage) => {
        // res.send('<div class="alert alert-danger" role="alert">Não foi possível cadastrar usuário!</div>')
        res.status(400).json({ error: 'Não foi possível cadastrar usuário, ' + erroMessage})
      })
    })


    




    app.get('/sobre', (req, res) => {
      res.render('sobre')
    })


    // PÁGINA NÃO EXISTE
    app.get('*', (req, res) => {
      res.render('404');
    });



    // ROTAS: admin

    // no parametro get eu escrevo a minha url: ex.: users/list
    app.get('/admin/users/create', (req, res) => {
      res.render('admin/users/create') //caminho das pastas
    });



    // Rotas admin
    app.use('/admin', admin);

    app.use('/teste', teste);



// RODANDO NA PORTA 8081
app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});