
const db = require('../db/connection');
const BookTable = require('../models/book.model');
const {eq,sql} = require("drizzle-orm");
const AuthorTable = require('../models/author.model');

exports.getAllBooks = async (req, res) => {
  const { search, bookId, authorId } = req.query;

  try {
    let query = db.select().from(BookTable);

    if (bookId) {
      query = query.where(eq(BookTable.id, bookId));
    } else if (authorId) {
      query = query.where(eq(BookTable.authorId, authorId));
    } else if (search) {
      query = query.where(
        sql`to_tsvector('english', ${BookTable.title}) @@ plainto_tsquery('english', ${search})`
      );
    }

    const result = await query;

    if (!result || result.length === 0) {
      return res.status(404).send('No books found');
    }

    res.json(result);

  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).send('Server error');
  }
};

// ismy hmny ak hi url pr ,okhtalif chizen krli hen bs query pr dpend kiya he query me id ay gi to id wla chlyga , author id ay gi to author id wla chly ga or search krny k liye search wla chly ga or jb kuch ni ay ga to sb books show krdy ga
// return hr response me isi liye lagaya he taky ak waqt me ak hi responsy jay or return hokr function sy bahar ajy






// *********************create book data
exports.CreateBookData = async (req, res) => {
  try {
    const { title, description, authorId } = req.body;

    if (!title || !description || !authorId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // check if author exists
    const authorExists = await db
      .select()
      .from(AuthorTable)
      .where(eq(AuthorTable.id, authorId)) // <-- fixed here
      .limit(1);

    if (!authorExists || authorExists.length === 0) {
      return res.status(404).json({ message: 'Author not found' });
    }

    // insert new book
    const result = await db.insert(BookTable).values({
      title,
      description,
      authorId,
    }).returning();

    return res.status(201).json({
      message: 'Book created successfully',
      data: result,
    });

  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// ****************delete book by id

exports.deleteBookById=async (req,res)=>{
  const id=req.params.id;
  const deletebook=await db.delete(BookTable).where(eq(BookTable.id,id));

  if(deletebook.rowCount ===0){
    return res.status(404).json({message:'Book not found'});
  }else{
    res.json({message:'Book deleted successfully',data:deletebook});
  }
}

// *********************update book by id

exports.updateBookById=async (req,res)=>{
try{
    const id=req.params.id;
  const {title,description,authorId}=req.body;  

   const updateData={};
  if(title!==undefined) updateData.title=title;
  if(description!==undefined) updateData.description=description;
  if(authorId!==undefined) updateData.authorId=authorId;

  if(Object.keys(updateData).length ===0){
    return res.status(400).json({message:'No data provided for update'});
  }

  const result=await db.update(BookTable).set(updateData).where(eq(BookTable.id,id)).returning();


  if(!result || result.length === 0){
    return res.status(404).json({message:'Book not found'});
  }else{
    res.json({message:'Book updated successfully',data:result});
  }

}catch(error){
    console.error('Error updating book:', error);
    res.status(500).json({message:'Server error'});
}
}
  

  

// ******************** delete book by id

exports.deleteBookById=async (req,res)=>{
   try{

      const id=req.params.id;
  const result=await db.delete(BookTable).where(eq(BookTable.id,id)).returning();  

  if(result.length ===0){
    return res.status(404).json({message:'Book not found'});
  }else{
    return res.json({message:'Book deleted successfully',data:result});
  }

   }catch(error){
    console.error('Error deleting book:', error);
    res.status(500).json({message:'Server error'});
  }
   }

