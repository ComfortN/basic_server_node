const http = require('http');

const PORT = 8887;
const localhost = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});


server.listen(PORT, localhost, () => {
    console.log(`Server running at: ${localhost} : ${PORT}`);
});
