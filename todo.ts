#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

let myTodo = [];
let condition = true;
while(condition){
    let questions = await inquirer.prompt([
        {
            name : "question1",
            type: "input",
            message : "what would you like to add in your todos?"
        },
        {
            name : "question2",
            type : "confirm",
            message : "would you want to add more in your todos?",
            default : "true"
        }
    ]);
myTodo.push(questions.question1);

chalk.greenBright(console.log(myTodo));
condition = questions.question2;
}
let i = 0;
for(let i=0;i<myTodo.length;i++){  
chalk.blue(console.log(myTodo[i]))};