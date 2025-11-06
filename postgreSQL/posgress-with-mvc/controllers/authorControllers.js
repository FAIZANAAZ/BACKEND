
const db = require('../db/connection');
const AuthorTable = require('../models/author.model');
const {sql,ilike,or ,eq} = require("drizzle-orm");
const BookTable = require('../models/book.model');


// ******************get all authors
exports.GetAllAuthors = async (req, res) => {
 
try{
   const {search,id}=req.query
 let query=db.select().from(AuthorTable)

if(id){
  query = query.where(
    eq(AuthorTable.id,id)
  )
 


}else if(search){
  // const result = await db.select().from(AuthorTable).where(
  //   sql`${AuthorTable.firstName} ILIKE ${`%${search}%`} 
  //   OR ${AuthorTable.lastName} ILIKE ${`%${search}%`} 
  //   OR ${AuthorTable.email} ILIKE ${`%${search}%`}`
  // )



  // oper wala lamba he isko hm short kr skte he
  query = query.where(or(
    ilike(AuthorTable.firstName, `%${search}%`),
    ilike(AuthorTable.lastName, `%${search}%`),
    ilike(AuthorTable.email, `%${search}%`)))
  // ILIKE is case insensitive YANi taha or TAHA ko wo same hi samjhga agr faiza ka f ya email ka n bhi likhengy wo le ayga 
  // hmny kha authortable me first name or last name or email  me jakr serch kro jo serch me ay 

  

 }

 const result = await query;
  res.status(200).json({message:"Authors fetched successfully",data:result});
}catch(error){
  console.error('Error fetching authors:', error);
  res.status(500).json('Server error');
}

}


// *****************create author data
exports.CreateAuthorData = async (req, res) => {

  try{
    const {firstName,lastName,email}=req.body;
   
    if(!firstName || !email){
      return res.status(400).json({message:"first name and email are required"});
    }

    const result=await db.insert(AuthorTable).values({firstName,lastName,email}).returning();
    res.status(201).json({message:"Author created successfully",data:result});
  }catch(error){
    console.error('Error creating author:', error);
    res.status(500).json('Server error');
  }
}


// ******************update author data

exports.UpdateAuthorData = async (req, res) => {
  try{
    const {id}=req.params;
    const {firstName,lastName,email}=req.body;
    
    const UpdateData={};
    if(firstName!==undefined) UpdateData.firstName=firstName;
    if(lastName!==undefined) UpdateData.lastName=lastName;
    if(email!==undefined) UpdateData.email=email;

    if(Object.keys(UpdateData).length ===0){
      return res.status(400).json({message:"No data provided for update"});
    }

    const result=await db.update(AuthorTable).set({firstName,lastName,email}).where(eq(AuthorTable.id,id)).returning();
    res.status(200).json({message:"Author updated successfully",data:result});
  }catch(error){
    console.error('Error updating author:', error);
    res.status(500).json('Server error');
  }
}


// ****************delete author data
exports.DeleteAuthorData = async (req, res) =>{
  try{
    const {id}=req.params;
    const books=await db.select().from(BookTable).where(eq(BookTable.authorId,id))
    // ye books isi liye nikala he kioky ak author bhut sari boks likhta he agr othor id ki bina pr delet kiya to sari books bhi delet 
    // ho jaygi is liye hmny likha he ke agr is author ki koi book he to usko delete na kro pehly books ko delete kro phir author ko

   

    if(books.length >0){
      return res.status(400).json({message:`Cannot delete author . Author has ${books.length} books. Delete the books first.`});
    }

     const result=await db.delete(AuthorTable).where(eq(AuthorTable.id,id)).returning();

     return res.status(200).json({message:"Author deleted successfully",data:result});
  }catch(error){
    console.error('Error deleting author:', error);
    res.status(500).json('Server error');
  }
}