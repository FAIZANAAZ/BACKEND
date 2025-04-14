import express, { Request, Response } from 'express';
import user_INQUIRY_MODEL from '../../MODELS/enquir';





const mypost_func = async (req: Request, res: Response) => {
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);
    try {
        const newEnquiry = new user_INQUIRY_MODEL({
          name,
          email,
          phone,
          message
        });
      
        await newEnquiry.save(); // Wait for insertion to complete
      
        res.status(200).send({
          message: "Enquiry Inserted Successfully",
          status: 200
        });
      } catch (err) {
        console.error(err);
        res.status(500).send({
          message: "Error inserting enquiry ",
          error: err
        });
      }
}

export default mypost_func


export const my_get_func=async(req: Request, res: Response) => {
  const enquirys = await user_INQUIRY_MODEL.find();

    res.send({message: "Enquiry Get Successfully", status: 200, enquirys});
}

export const my_delete_func= async (req: Request, res: Response)=>{
    
    const id : string = req.params.id
    const enquiry = await user_INQUIRY_MODEL.deleteOne({ _id: id })

    res.send({
        message: "Enquiry Deleted Successfully",
        status: 200

    })

}

export const my_update_func=async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const { name, email, phone, message } = req.body;
  
    const update = await user_INQUIRY_MODEL.updateOne(
      { _id: id },
      { $set: { name, email, phone, message } }
    );
  
    res.send({
      message: "Enquiry updated successfully",
      status: 200,
      update
    });
  }