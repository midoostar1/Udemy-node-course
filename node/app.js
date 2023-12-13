//importing the http core module
const http = require('http');

//creating a server with node
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)

  // setting header and writting some html to the response HEADER
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head></head>')
  res.write('<body><h1>Hello From Node</h1></body>')
  res.write('<html>')
  res.end();
  
})

//listening on port 3000
server.listen(3000);