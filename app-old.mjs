import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req);


    res.write('Hola Mundo');
    res.end();
});

server.listen(8080);

console.log('Escuchando en el puerto 8080');