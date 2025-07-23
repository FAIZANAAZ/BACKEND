import fs from 'fs';
const sumRequestHandler = (req, res) => {
    console.log(req.url, req.method);
    const bodyChunks = [];
    req.on("data", (chunk) => {
        bodyChunks.push(chunk);
    });
    req.on("end", () => {
        const bodyString = Buffer.concat(bodyChunks).toString();
        const params = new URLSearchParams(bodyString);
        const bodyObj = Object.fromEntries(params);
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
