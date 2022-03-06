let http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Here we go again');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port} `)
});