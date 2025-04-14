import mongoose from "mongoose";

// https://mongoosejs.com/docs/guide.html yha sy hm schema dekh skty hen
let user_INQUIRY = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        // unique: true ka matlb he ye bat hmny chema me hi bta diya ke email same nhi ana chiye
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// name or type dena azmi he schema me

const user_INQUIRY_MODEL = mongoose.model("user_INQUIRY", user_INQUIRY);
// user_INQUIRY NAME SY HMARA table  KA NAME HE yani schema  OR OSMY FIRELD JOHONGI WO user_INQUIRY HE

export default user_INQUIRY_MODEL;      