
const {books} = require('../models/data');

module.exports.getallbooks=(req,res)=>{
    res.setHeader("x-info","faiza naaz")
    res.json(books);
}
module.exports.findbook = (req,res)=>{
    const bookId = parseInt(req.params.bookId); // id number me convert kro
    const book = books.find(b => b.id === bookId);

    if(!book){
        return res.status(404).json({error:"Book not found"});
    } else {
        res.json(book);
    }
}


module.exports.addbook=(req,res)=>{
    const {title,author} = req.body;

    const id=books.length+1;
    if(!title || title=="" || !author || author==""){
        return res.status(400).json({error:"Please provide all the details"});
    }else{
    books.push({ id:id,title:title,author:author});}
    res.status(201).json(books);
}