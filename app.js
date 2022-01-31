const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile(__dirname + "/home.html")
    .then(content => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});