const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "What is the title of your project?"
        },
        {
          type: "input",
          name: "description",
          message: "Give a description of your project."
        },
        {
          type: "input",
          name: "installation",
          message: "What are the instructions for installation?"
        },
        {
          type: "input",
          name: "usage",
          message: "List any usage information."
        },
        {
          type: "input",
          name: "contribution guidelines",
          message: "What are the guidelines for the project?"
        },
        {
          type: "input",
          name: "test instructions",
          message: "How do you test out your projects?"
        }
        

    ]);
}