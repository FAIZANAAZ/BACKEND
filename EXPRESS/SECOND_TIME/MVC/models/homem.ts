import fs from "fs";
import path from "path";
import getPath from "../utils/path.util.js";



export class HomeClass{
  homename: string;

  constructor(homename: string) {
    this.homename = homename;
  }

  save() {
    HomeClass.fetchAll((callback: any) => {
 callback.push(this);
//  jb hm khali this call krty hen iska matlb ye he ke wo chiz contructer ke variable me jakr save hogi 
  const files = path.join(getPath, "database.txt");

fs.writeFileSync(files, JSON.stringify(callback)

);
    });
 
}

static fetchAll(callback: any) {
 
const files = path.join(getPath, "database.txt");


fs.readFile(files, (err, data) => {
  if (err) {
   return callback([]);
  }
  else {
    return callback(JSON.parse(data.toString()))
    // hmny read kiya yani nikala daata jo file me wite kiya hoga ab koi bhi fatchall call karega to uska data mil jayega
  }
})

}

// TAKY JB BHI SERVER CHLY JO BHI PUSH HOWA WO FILE ME A JAY GA

}