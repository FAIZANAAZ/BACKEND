import schema from "@/app/MODELS/enquiry.model";


export const insert_api = async (req: any, res: any) => {
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);
    try {
        const newEnquiry = new schema({
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

export const get_api=async (req: any, res: any) => {
    const enquirys = await schema.find();

    res.send({message: "Enquiry Get Successfully", status: 200, enquirys});
}

export const update_api=async (req: any, res: any) => {
    const id: string = req.params.id;
    const { name, email, phone, message } = req.body;
  
    const update = await schema.updateOne(
      { _id: id },
      { $set: { name, email, phone, message } }
    );
  
    res.send({
      message: "Enquiry updated successfully",
      status: 200,
      update
    });
}


export const delete_api=async (req: any, res: any) => {
 
    const id : string = req.params.id
    const enquiry = await schema.deleteOne({ _id: id })

    res.send({
        message: "Enquiry Deleted Successfully",
        status: 200

    })
}
