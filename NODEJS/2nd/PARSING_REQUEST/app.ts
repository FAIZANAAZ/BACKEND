import fs from 'fs';
import http from 'http';
import  {reqHandler} from './form.js';
// hm node
// **********************
const server = http.createServer(reqHandler)


const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
// ye ak server bnayga 