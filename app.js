import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import home from './routes/home.js';
import login from './routes/login.js';
import register from './routes/register.js';
import routeUser from './routes/user.js';
import routeUserAdmin from './routes/admin.js';
import verifyUserEmailRoute from './routes/verificarEmail.js';
import githubAPI from './services/api/github.service.js';
const app = express();
// const checkIfAuthenticated = require("./middlewares/authenticate");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', home);
app.use('/login', login);
app.use('/cadastro', register);
app.use('/home', routeUser); // Rotas com permissão de acesso: Token válido
app.use('/admin', routeUserAdmin);
app.use('/verificar-email', verifyUserEmailRoute);
app.use('/cadastro', register);
app.use('/api/data', githubAPI);

app.get('*', (req, res) => res.render('404'));

app.listen(8080, () => console.log('Servidor iniciado na porta 8080: http://localhost:8080 🔥'));   