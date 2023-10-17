const express  = require('express');
const app = express();
const { engine } = require('express-handlebars');
const { request } = require('http');
const path = require('path');
const home = require('./routes/home');
const routeUser = require('./routes/user');
const routeUserAdmin = require('./routes/admin');
const verifyUserEmailRoute = require('./routes/verificarEmail');
const register = require('./routes/register');
// const checkIfAuthenticated = require("./middlewares/authenticate");

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', home);
app.use('/home', routeUser); // Rotas com permissão de acesso: Token válido
app.use('/admin', routeUserAdmin);
app.use('/verificar-email', verifyUserEmailRoute);
app.use('/cadastro', register);

app.get('*', (req, res) => res.render('404'));

app.listen(8080, () => console.log('Servidor iniciado na porta 8080: http://localhost:8080 🔥'));   