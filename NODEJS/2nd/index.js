import http from 'http';
// **********************
const server = http.createServer(function (request, response) {
    response.end("oooo world");
});
const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
// ye ak server bnayga 
