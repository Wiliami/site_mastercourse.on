import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import routes from './routes/routes.main.js';

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    };

    config() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        this.app.use('/assets', express.static(path.join(__dirname, '../public/assets')));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', engine({extname: '.hbs'}));
        this.app.set('view engine', '.hbs');
        this.app.use(express.urlencoded({ extended:false }));   
        this.app.use(express.json());
    };

    routes() {
        this.app.use('/', routes);
        this.app.get('*', (req, res) => res.render('404'));
    };

    /** 
     * @param {number} port server port number
     */
    listen(port) {
        this.app.listen(port, () => console.log('Servidor iniciado na porta 8080: http://localhost:8080 🔥'));
    };
}


export { App };