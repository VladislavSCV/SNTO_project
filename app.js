const http = require('http'); // либа для работы с http запросами
const fs = require('fs'); // либа для работы с файлами

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const stream = fs.createReadStream('templates/index.html')
    stream.pipe(res)
})

server.listen(8000, "127.0.0.1", () => {
    console.log("server is running")
})