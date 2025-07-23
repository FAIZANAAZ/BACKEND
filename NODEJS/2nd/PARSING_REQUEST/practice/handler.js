import sumRequestHandler from "./sum.js";
const request_handler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<h1>hello</h1>");
        res.write("<body>");
        res.write("<h1>Calculator</h1>");
        res.write("<a href='/calculator'>Go to Calculator</a>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if (req.url === "/calculator") {
        res.write("<html>");
        res.write("<h1>hello</h1>");
        res.write("<body>");
        res.write("<h1>Here is the Calculator</h1>");
        res.write(`
      <form action="/sum_result" method="POST">
        <input type="text" name="a" placeholder="Enter your first number" />
        <input type="text" name="b" placeholder="Enter your second number" />
        <input type="submit" />
      </form>
    `);
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if (req.url === "/sum_result" && req.method === "POST") {
        return sumRequestHandler(req, res);
    }
};
export default request_handler;
