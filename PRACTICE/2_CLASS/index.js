import express from 'express';
// .agr hm  likhety hen import to pekig.json me type module krna hota he 
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
// get a list of 5 joks
app.get("/jokes", (req, res) => {
    const josks = [
        "Joke 1",
        "Joke 2",
        "Joke 3",
        "Joke 4",
        "Joke 5"
    ];
    res.send(josks);
});
const port = process.env.PORT || 3000;
// agr env pr nhi milyga to hard coded wo lelega lekin hm env sy hi krengy deploy me msla hoga
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
