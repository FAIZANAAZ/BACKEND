"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const web_1 = __importStar(require("../../CONTROLLER/WEB/web"));
dotenv_1.default.config(); // ✅ Load environment variables
const app = (0, express_1.default)();
// yha hm insert krengy chema ko 
app.use(express_1.default.json());
const router = express_1.default.Router();
router.get('/', web_1.my_get_func);
router.post('enquiry-insert', web_1.default);
// hm functionality llikhty hen controllers me hm ye isi trha hmny ye function bnaya controllers me osmy sari functionality LIKH DO R OSY YHA LGA DIYA 
// delete
router.delete("enquiry-delete/:id", web_1.my_delete_func);
// put update
router.put("update/:id", web_1.my_update_func);
exports.default = router;
