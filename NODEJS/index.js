"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
fs_1.default.writeFile("hey.txt", "hi kesy ho", function (err) {
    if (err)
        console.log(err);
    else
        console.log("done");
});
// /hmny yha ak file bnali yani hm is trha file create krty hen
fs_1.default.appendFile("hey.txt", "me thiq", function (err) {
    if (err)
        console.log(err);
    else
        console.log("done");
});
// appendfile matlb jo filebai he osky ander add krna 
fs_1.default.rename("hsy.txt", "hello.txt", function (err) {
    if (err)
        console.log(err.message);
    else
        console.log("done");
});
// esy hmny renam krdiya file
fs_1.default.copyFile("hello.txt", "./hello2.txt", function (err) {
    if (err)
        console.log(err);
    else
        console.log("done");
});
// yha hm os file ki copy bna k=skty hen yani hellowali file me jitna work hoga 
// wo sara a jayga 
fs_1.default.unlink("hello.txt", function (err) {
    if (err)
        console.log(err);
    else
        console.log("done");
});
// unlink yani wo file delete krdega jiskaname diya he
fs_1.default.rmdir("./hello2.txt", { recursive: true }, function (err) {
    if (err)
        console.log(err);
    else
        console.log("remove");
});
// ye folder ko delete kr skta he
fs_1.default.rm("./hello2.txt", { recursive: true }, function (err) {
    if (err)
        console.log(err);
    else
        console.log("restore");
});
// ye again os folder ko bnadega
// **********************
const server = http_1.default.createServer(function (request, response) {
    response.end("hello world");
});
server.listen(3000);
// ye ak server bnayga 
