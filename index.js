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
          name: "contributionGuidelines",
          message: "What are the guidelines for the project?"
        },
        {
          type: "input",
          name: "testInstructions",
          message: "How do you test out your projects?"
        },
        {
          type: "list",
          name: "badge",
          message: "What type of license do you want?",
          choices: ['apache 2', '3']

        }



    ])


     .then(answers => {
        var output = ('# ' + answers.title + '\n ' + '- ' + answers.description + '\n ' + '- ' + answers.installation + '\n ' + '- ' + answers.usage + '\n ' + '- ' + answers.contributionGuidelines + '\n ' + '- ' + answers.testInstructions);
        console.log(output);
        console.log(answers);
        if (answers.badge === 'apache 2') {
          output = output + ' \n ' + '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) '
        }
       fs.writeFile('README.md', output, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
       });
      })
}
      promptUser() 
      

//create ReadMe page
function generateReadMe(answers) {
    return `
 
    `
}