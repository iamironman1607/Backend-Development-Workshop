const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>This is out first node server</h1>");
  }
  if (request.url == "/test") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>test page</h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, console.log("server up at 3000"));
