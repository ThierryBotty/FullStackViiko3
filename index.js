const http = require('http')

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
});

const port = 3001
console.log("works")
app.listen(port)
console.log(`Server running on port ${port}`)
