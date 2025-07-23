import fs from 'fs';
import { IncomingMessage, ServerResponse } from 'http';

const sumRequestHandler = (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url, req.method);
  
  const bodyChunks: Uint8Array[] = [];

  req.on("data", (chunk) => {
    bodyChunks.push(chunk);
  });
// chunks hmara data hi hota he joky choty choty hiso me ata he isi liye hmny osko arrray me ikhata kr liya 
  req.on("end", () => {
    // Yeh line ek aur event listener setup karti hai, jo "end" event par trigger hota hai. "end" event tab hota hai jab request ka sara data server tak pohnch jata hai aur data transfer complete ho jata hai.


    const bodyString = Buffer.concat(bodyChunks).toString();
    // Yeh line bodyChunks array ke sare chunks ko concatenate (jod) karti hai aur unko ek single string mein convert karti hai.
    const params = new URLSearchParams(bodyString);
    // ye jesy ajeeb sa url ata he 12=1$&2=2$&3=3$ isko key value pairs keproper object me badlta he
    const bodyObj = Object.fromEntries(params);
    // Yeh line params (jo ke ek URLSearchParams object hai) ko ek plain JavaScript object mein convert karti hai.

    // Convert strings to numbers before summing
    const a = Number(bodyObj.a);
    const b = Number(bodyObj.b);
    const result = a + b;

    // Write result to file as string
    const filename = "data.txt";
    fs.writeFileSync(filename, result.toString());

    console.log("Sum result:", result);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write(`<h1>Sum of ${a} and ${b} is ${result}</h1>`);
    res.write("</body>");
    res.write("</html>");
    res.end();
  });
};

export default sumRequestHandler;
