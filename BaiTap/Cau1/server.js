const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

// Create a server object:
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    // This is the main page, so send back HTML
    res.writeHead(200, { "Content-Type": "text/html" });
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    res.end(html);
  } else if (req.url.match(".css$")) {
    // The request is for a CSS file
    var cssPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match(".js$")) {
    // The request is for a JavaScript file
    var jsPath = path.join(__dirname, req.url);
    var fileStream = fs.createReadStream(jsPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "application/javascript" });
    fileStream.pipe(res);
  } else {
    // For any other requests, tell the client it was not found
    res.writeHead(404);
    res.end();
  }
});

// Set up our server so it will listen on the port
server.listen(port, function (error) {
  // Checking any error occur while listening on port
  if (error) {
    console.log("Something went wrong", error);
  }
  // Else sent message of listening
  else {
    console.log("Server is listening on port " + port);
  }
});
