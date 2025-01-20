import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import routes from '../routes/index.js';

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        this.app.use('/assets', express.static(path.join(__dirname, '../../public/assets')));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.engine('.hbs', engine({extname: '.hbs'}));
        this.app.set('view engine', '.hbs');
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', routes);
        this.app.get('*', (req, res) => res.render('404'));
    }

    listen(port) {
        this.app.listen(port, () => console.log('Servidor iniciado na porta 3000: http://localhost:3000 🔥'));
    }
}

export { App };