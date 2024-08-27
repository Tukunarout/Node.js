const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

  const logs = `${Date.now()}:${req.url} New log received\n`;
  const myUrl = url.parse(req.url, true);

  console.log(myUrl);
  
  fs.appendFile("log.txt", logs, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");

        break;
      case "/about":
        const userName = myUrl.query.name;
        res.end(`Hi ${userName}`);

        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`Here are the search result for  ${search}`);

        break;

      default:
        res.end("404 not found");
        break;
    }
  });

  console.log("Server created");
});

PORT = 2024;

myServer.listen(PORT, () => {
  console.log(`Sever listen to the port:http://localhost:${PORT}`);
});
