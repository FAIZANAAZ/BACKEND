#!/usr/bin/env node
"use strict";
// import chalk from "chalk";
// import inquirer from "inquirer";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(chalk.bgYellow.bold.italic.underline("\n\t Hello ! (WELCOME IN FAIZA_NAAZ(WORDS COUNTER))\n\t"));
// let quation =await inquirer.prompt([{
//     type:"confirm",
//     name: "yes$no",
//     message:"You want to count your sentence length ",
//     default:true
// }])
// if (quation.yes$no == true){
//     console.log(chalk.bgBlue.bold("\n\t ok sure \n\t"));
//     let user_ans = await inquirer.prompt(
//     [
//     {
//     type:"input",
//     name: "words",
//     message:"please enter you sentences"
// }])
// console.log("\n\t",chalk.bgMagentaBright.bold(user_ans.words)+"\n\t");
// if(user_ans.words !== " "){
// let answer = user_ans.words.trim().split(" ").filter((e:any)=>e.length>0).length
// console.log(answer);
// console.log(chalk.bgGray.bold(`\n\t Your sentence words count is ${answer.length} words`));
// }}else {
//     console.log(chalk.bgCyanBright.bold("\n\t OK BY"));
//     }
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//.........welcom message simple.............. */
console.log(chalk_1.default.bold.italic.magentaBright("\n\t 🎀 ******************* WELCOM IN WORDS $ CHARACTERS COUNTER APPLICATION ***************** 🎀 \n\t"));
//................variable for confermation to do while loop..................
let condition = true;
//............quation choise ["CHARACTERS", "WORDS"] .............//
do {
    let choos = await inquirer_1.default.prompt([{
            name: "firstly",
            type: "list",
            message: chalk_1.default.bold.red("\n YOU WANT TO KNOW THE LENGTH OF WORDS OR CHARATERS IN YOUR SENTENCE ❔ \n"),
            choices: ["CHARACTERS", "WORDS"]
        }]);
    //...............characters.........//
    if (choos.firstly === "CHARACTERS") {
        let quation = await inquirer_1.default.prompt([{
                name: "ans",
                type: "output",
                message: chalk_1.default.bold.red("\nWRITE YOUR SENTENCE ❔ \n")
            }]);
        //join ko join krny ke liye tring me () "" inverted comas dena prhty hen
        let count = quation.ans.trim().split(" ").join("").length;
        if (quation.ans !== "") {
            console.log(chalk_1.default.hex("#4287f5").bold(`\n\t ➖➖ YOUR CARRECTORS LENGTH IS ${count} ➖➖\n\t`));
        }
    }
    //......................words................
    else if (choos.firstly === "WORDS") {
        let quation2 = await inquirer_1.default.prompt([{
                name: "words",
                type: "output",
                message: chalk_1.default.bold.red("WRITE YOUR SENTENCE ❔ \n")
            }]);
        //.filter ka use hmny isi liye kiya he taky wo space ko count na kry jismy hmny likha he ke esy words
        //ko lana jiski length 0 sy bari ho or space ki lenth 0 hoti he
        let count2 = quation2.words.trim().split(" ").filter((e) => e.length > 0).length;
        if (quation2.words !== "") {
            console.log(chalk_1.default.hex("#4287f5").bold(`\n\t ➖➖ YOUR WORDS LENGTH IS ${count2} ➖➖ \n\t`));
        }
    }
    //..................confirm messAGE...................
    let last_quation = await inquirer_1.default.prompt({
        name: "con",
        type: "confirm",
        message: chalk_1.default.bold.yellow("\n DO YOU WANT TO CONTINUE APPLICATION ❔ ")
    });
    if (last_quation.con === false) {
        condition = false;
    }
} while (condition);
//...........thanks message after using app.............
console.log(chalk_1.default.bold.italic.magentaBright("\n\t 🎀 **************** THANKS FOR USING APPLICATION ************ 🎀 \n\t"));
