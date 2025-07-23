import http from 'http';
import fs from 'fs';

const server=http.createServer(function (req:any,res:any) {
  console.log(req.url,req.method, req.headers)
  // ye hm isiliye likhty he taky console me hm chack kr sky ke konsa url he 3000 ya 30001 or konsa method he post get 

if (req.url==="/"){
res.write("<body>")
res.write("<html>")
res.write("<br><h2>Quick Links:</h2>")
res.write("<a href='/home'>Home</a> | ")
res.write("<a href='/about'>About</a> | ")
res.write("<a href='/kid'>Kid</a> | ")
res.write("<a href='/woman'>Woman</a>")

res.write("</body>")

res.write("</html>")
}else if (req.url==="/home"){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("<h1> Welcome to Home</h1>");
  return res.end();
}else if (req.url==="/about"){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("<h1> Welcome to About</h1>");
  return res.end();
}
else if (req.url==="/kid"){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("<h1> Welcome to Kid</h1>");
  return res.end();
}
else if (req.url==="/woman"){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("<h1> Welcome to Woman</h1>");
  return res.end();
}
else{
res.writeHead(200,{'Content-Type':'text/html'});
res.write("<h1>404 Not Found</h1>");
res.end()}

  

})

const port = 3000
server.listen(port,() => {
    console.log(`server is running on port ${port}`)
})