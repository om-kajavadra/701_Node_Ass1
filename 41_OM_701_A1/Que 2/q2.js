import http from "http";
import fs from "fs";

const PORT = 3000;

http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}).listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
