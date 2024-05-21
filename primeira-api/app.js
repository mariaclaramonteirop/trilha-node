const http = require('http');

const servidor = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain;cd charset=utf8');
    res.end('Olá, Maria!');
}
);

const porta = 3000;
const host = 'localhost';

servidor.listen(porta, host, ()=> {
    console.log(`Servidor executanto em http://${host}:${porta}/`);
})

