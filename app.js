const express  = require('express');
const app = express();
const { engine } = require('express-handlebars');
const { request } = require('http');
const path = require('path');
const home = require('./routes/home');
const routeUser = require('./routes/user');
const routeUserAdmin = require('./routes/admin');
const checkIfAuthenticated = require("./middlewares/authenticate");

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', home);
app.use('/login', (req, res) => res.render('login'));
app.use('/cadastro', (req, res) => res.render('register'));

// Rotas com permissão de acesso: Token válido
app.use('/home', routeUser);
app.use('/admin', routeUserAdmin);

app.get('*', (req, res) => res.render('404'));

app.listen(8081, () => console.log('Servidor iniciado na porta 8081: http://localhost:8081'));