const express  = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const signIn = require("./routes/signIn");
const signUp = require("./routes/SignUp");
const home = require('./routes/home');
const user = require('./routes/user');
const routeAdmin = require('./routes/admin');

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', home);
app.use('/home', user);
app.use('/admin', routeAdmin);
app.use('/login', signIn);
app.use('/cadastro', signUp);
app.get('*', (req, res) => res.render('404'));

app.listen(8081, () => {
    console.log('Servidor iniciado na porta 8081: http://localhost:8081');
});