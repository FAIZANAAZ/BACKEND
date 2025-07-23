import http from 'http';
import request_handler from './handler.js';
// hm node
// **********************
const server = http.createServer(request_handler);
const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
// ye ak server bnayga 
