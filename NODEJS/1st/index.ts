import fs from 'fs';
import http from 'http';

fs.writeFile("hey.txt","hi kesy ho", function (err) {
    if (err)console.log(err);
    else console.log("done");   
    
})
// /hmny yha ak file bnali yani hm is trha file create krty hen
fs.appendFile("hey.txt","me thiq", function (err) {
    if (err)console.log(err);
    else console.log("done");   
    
})

// appendfile matlb jo filebai he osky ander add krna 

fs.rename("hsy.txt","hello.txt", function (err) {
    if (err)console.log(err.message);
    else console.log("done");   
    
})

// esy hmny renam krdiya file

fs.copyFile("hello.txt","./hello2.txt", function (err) {
    if (err)console.log(err);
    else console.log("done");   
    
})

// yha hm os file ki copy bna k=skty hen yani hellowali file me jitna work hoga 
// wo sara a jayga 

fs.unlink("hello.txt",function (err) {
    if (err)console.log(err);
    else console.log("done");   
    
})

// unlink yani wo file delete krdega jiskaname diya he

fs.rmdir("./hello2.txt",{recursive:true}, function (err) {
    if (err)console.log(err);
    else console.log("remove");   
    
}
)
// ye folder ko delete kr skta he

fs.rm("./hello2.txt",{recursive:true}, function (err) {
    if (err)console.log(err);
    else console.log("restore");   
    
}
)

// ye again os folder ko bnadega

// **********************

const server = http.createServer(function (request:any,response:any) {
    response.end("hello world")
    
})

server.listen(3000)
// ye ak server bnayga 