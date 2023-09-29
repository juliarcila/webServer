import express from 'express';
import * as url from 'url';
import hbs from 'hbs';
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Como servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        titulo: "Aprendiendo Node",
        nombre: "Julián Arcila",
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: "Aprendiendo Node",
        nombre: "Julián Arcila",  
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: "Aprendiendo Node",
        nombre: "Julián Arcila",  
    })
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`La app esta escuchando por el puerto ${port}`)
  })