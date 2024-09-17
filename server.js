const http = require('http');

const PORT = 8887;
const localhost = 'localhost';

// Server information object
let serverInfo = {
    name: 'Basic Node.js Server',
    version: '20.9.0',
    description: 'A simple HTTP server with multiple routes and request methods.'
};

// Create the HTTP server
const server = http.createServer((req, res) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    
    if (req.url === '/') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Basic Node.js Server!');
            // Handle POST request for root URL
        } else if (req.method === 'POST') {
            console.log('Handling POST request');
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
                console.log('Received chunk:', chunk.toString());
            });
            req.on('end', () => {
                console.log('Finished receiving data:', body);
                try {
                    const data = JSON.parse(body);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        message: 'Data received successfully',
                        data: data
                    }));
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Bad Request: Invalid JSON');
                }
            });
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    } else if (req.url === '/about') {
        // Handle GET request for /about URL
        if (req.method === 'GET') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(serverInfo));

        } else if (req.method === 'PUT') {
            // Handle PUT request for /about URL
            console.log('Handling PUT request');
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
                console.log('Received chunk:', chunk.toString());
            });
            req.on('end', () => {
                console.log('Finished receiving data:', body);
            try {
                const updatedInfo = JSON.parse(body);
                // Update serverInfo with new values, keeping existing values if not provided
                serverInfo = { ...serverInfo, ...updatedInfo };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'Server information updated successfully',
                    data: serverInfo
                }));
            } catch (error) {
                console.error('Error parsing JSON:', error);
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Bad Request: Invalid JSON');
            }
        });
        }
        else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    }
    
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://${localhost}:${PORT}/`);
});

// Error handling
server.on('error', (error) => {
    console.error('Server error:', error);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});