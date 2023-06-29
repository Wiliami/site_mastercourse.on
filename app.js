const express  = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const home = require('./routes/home');
const user = require('./routes/user');
const AdminRoute = require('./routes/admin');
const { request } = require('http');
// const authenticateToken = require("./middlewares/authenticate-jwt"); 

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', home);
app.use('/home', user);
app.use('/admin', AdminRoute);
app.use('/login', (req, res) => res.render('login'));
app.use('/cadastro', (req, res) => res.render('cadastro'));

app.get('*', (req, res) => res.render('404'));

app.listen(8081, () => console.log('Servidor iniciado na porta 8081: http://localhost:8081') );