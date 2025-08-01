import path from "path";
import { fileURLToPath } from "url";
// Get the current file name (using import.meta.url)
const __filename = fileURLToPath(import.meta.url);
// Get the directory name of the current file
const __dirname = path.dirname(__filename);
// Now you can use __dirname
const filename = path.join(__dirname, '../routes/views');
const getPath = path.dirname(filename);
console.log(getPath); // Will print the directory path
export default getPath;
