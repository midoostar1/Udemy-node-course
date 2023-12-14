//importing the http core module
const http = require("http");

const routes = require("./routes");

//creating a server with node
const server = http.createServer(routes);

//listening on port 3000
server.listen(3000);
