"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const inquiryrout_1 = __importDefault(require("./APP/ROUTS/web/inquiryrout"));
dotenv_1.default.config(); // ✅ Load environment variables
const app = (0, express_1.default)();
app.use("/web/api/enquiry", inquiryrout_1.default);
// hm web/api/enquir ki jga koch hi name de skty hen asal me ye ak atatic rout hmny de ddiya he ke sary api routs jo hen wo is web/api/enquir kebad aygy jesy 
// http://localhost:3000/web/api/enquiry/enquiry-insert
// yha hm insert krengy chema ko 
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.DURL || '')
    .then(() => {
    console.log('MongoDB connected');
    app.listen("3000", () => console.log("Listening on port 3000"));
})
    .catch((err) => console.log('MongoDB connection error:', err));
// mongoose sy mongodb khod connetc ho gya is code sy 
// phir datbase me jakr dekhengy ke bna ya nhi bna data crtl+r keky matlb refresh krky 
