"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// https://mongoosejs.com/docs/guide.html yha sy hm schema dekh skty hen
let user_INQUIRY = new mongoose_1.default.Schema({
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
const user_INQUIRY_MODEL = mongoose_1.default.model("user_INQUIRY", user_INQUIRY);
// user_INQUIRY NAME SY HMARA table  KA NAME HE yani schema  OR OSMY FIRELD JOHONGI WO user_INQUIRY HE
exports.default = user_INQUIRY_MODEL;
