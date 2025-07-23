import http from 'http';
// hm node
// **********************
const server = http.createServer(function (request, response) {
    console.log(request.url, request.method, request.headers);
    if (request.url === '/') {
        response.setHeader("Content-Type", "text/html");
        // hm header set kry hen
        response.write("<h1>hello /</h1>");
        // isy hm koch bhi likh skty hen acha dikahny ke liey html me likh diya 
        return response.end();
    }
    else if (request.url === '/product') {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>hello product</h1>");
        return response.end();
        // return likhna isi liye lazim he kioky agr hmny response.end likhty hen to osky bad again header wagera bhej nhi skty agr hmny ak header bheja he if else sy bahir to wo error dedega kioky if else ke bad to agy ka code khod sy run hota he to hm return krdengy phir nhi hoga wo 
    }
    else {
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>hello world</h1>");
        response.end();
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
// ye ak server bnayga 
