const http = require('http');

const server = http.createServer((request, response) => {
    response.end("Hello Coder Army");
});

server.listen(3000,()=>{
    console.log("I am Listening at port 3000");
});