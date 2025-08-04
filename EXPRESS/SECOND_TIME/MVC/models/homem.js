import fs from "fs";
import path from "path";
import getPath from "../utils/path.util.js";
export class HomeClass {
    homename;
    constructor(homename) {
        this.homename = homename;
    }
    save() {
        HomeClass.fetchAll((callback) => {
            callback.push(this);
            const files = path.join(getPath, "database.txt");
            fs.writeFileSync(files, JSON.stringify(callback));
        });
    }
    static fetchAll(callback) {
        const files = path.join(getPath, "database.txt");
        fs.readFile(files, (err, data) => {
            if (err) {
                return callback([]);
            }
            else {
                return callback(JSON.parse(data.toString()));
            }
        });
    }
}
