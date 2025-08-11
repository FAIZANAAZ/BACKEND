import { HomeClass } from "../models/homem.js";
export const home = (req, res, next) => {
    // Example array, replace as needed
    // Callback use karo
    HomeClass.fetchAll((data) => {
        res.render("home", { DATA: data });
    });
};
