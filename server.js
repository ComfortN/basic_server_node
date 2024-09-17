const http = require('http');

const PORT = 8887;
const localhost = 'localhost';

const server = http.createServer((req, res) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    
    if (req.url === '/') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Basic Node.js Server!');
        }  else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://${localhost}:${PORT}/`);
});

