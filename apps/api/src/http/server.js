import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import routes from '../routes/index.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, '../../public/assets')));
app.set('views', path.join(__dirname, '../views'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);
app.get('*', (req, res) => res.render('404'));
app.listen(3000, () => console.log('Servidor iniciado na porta 3000: http://localhost:3000 🔥'));