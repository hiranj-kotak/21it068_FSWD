const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {

        res.end('This is Post Method');
    } else if (req.method === 'GET') {
        res.end('This is Get Method');
    } else if (req.method === 'PUT') {
        res.end('This is Put Method');
    } else if (req.method === 'DELETE') {
        res.end('This is Delete Method');
    } else if (req.method === 'PATCH') {
        res.end('This is Patch Method');
    }

}).listen(3000, () => console.log('Server running on port 3000'));