const http = require('http');

http.createServer((req, res) => {

        //res.write('hola mundo');
        res.writeHead(200, { 'Content-Type': 'aplication/json' });
        let salida = {
            nombre: 'Johan Arroyo',
            direccion: 'moravia',
            url: req.url
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);
console.log('Escuchando puerto 8080');