"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.my_update_func = exports.my_delete_func = exports.my_get_func = void 0;
const enquir_1 = __importDefault(require("../../MODELS/enquir"));
const mypost_func = async (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message);
    try {
        const newEnquiry = new enquir_1.default({
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
    }
    catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error inserting enquiry ",
            error: err
        });
    }
};
exports.default = mypost_func;
const my_get_func = async (req, res) => {
    const enquirys = await enquir_1.default.find();
    res.send({ message: "Enquiry Get Successfully", status: 200, enquirys });
};
exports.my_get_func = my_get_func;
const my_delete_func = async (req, res) => {
    const id = req.params.id;
    const enquiry = await enquir_1.default.deleteOne({ _id: id });
    res.send({
        message: "Enquiry Deleted Successfully",
        status: 200
    });
};
exports.my_delete_func = my_delete_func;
const my_update_func = async (req, res) => {
    const id = req.params.id;
    const { name, email, phone, message } = req.body;
    const update = await enquir_1.default.updateOne({ _id: id }, { $set: { name, email, phone, message } });
    res.send({
        message: "Enquiry updated successfully",
        status: 200,
        update
    });
};
exports.my_update_func = my_update_func;
