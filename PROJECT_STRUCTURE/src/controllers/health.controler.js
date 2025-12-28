import {ApiResponse} from '../utils/api-response.js';
import { asyncHandler } from '../utils/async.handler.js';

// const healthCheckController=(req,res)=>{
// try{
//     res.status(200).json(new ApiResponse(200, null, "Health check successful"));
// }catch(error){
//     res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
// }}
// hm class ke ander jo arguments me dety hen osko bina keys ke directly use kr skty hen or ye ek standard response format he lekin hmy arguments ko ciquence dena pary ga agy pichy nhi kr skty jesy message phly or status code bad me 

///*************************** */

const healthCheckController=asyncHandler(async(req,res)=>{
    res.status(200).json(new ApiResponse(200, null, "Health check successful"));
});

export {healthCheckController};
// ye zada acha tarika he ismy try catch nhi likhna para clean rha code 
