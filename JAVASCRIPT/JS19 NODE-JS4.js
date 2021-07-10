  const http = require('http')
  const fs = require('fs')
  const fileContents = fs.readFileSync('tut36 Css Grid Area-Areas.html')
  

  const server = http.createServer((req, res)=>{
      res.writeHead(200,{'Contents-type':'text/html'})
      res.end(fileContents
      )
  })
  server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80");
  });