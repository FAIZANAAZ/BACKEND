import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mypost_func, { my_delete_func, my_get_func, my_update_func } from '../../CONTROLLER/WEB/web';




dotenv.config(); // ✅ Load environment variables

const app = express();

// yha hm insert krengy chema ko 
app.use(express.json());


const router = express.Router();


router.get('/', my_get_func)

router.post('enquiry-insert', mypost_func);  
// hm functionality llikhty hen controllers me hm ye isi trha hmny ye function bnaya controllers me osmy sari functionality LIKH DO R OSY YHA LGA DIYA 



// delete
router.delete("enquiry-delete/:id",my_delete_func);

// put update

router.put("update/:id", my_update_func);

export default router