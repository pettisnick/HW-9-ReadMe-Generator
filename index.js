const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("utils");

const writeFileAsync = util.promisify(fs.writeFile);

//array of questions for the user
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
          name: "license",
          message: "Please chose a license for this project",
          choices: ['Apache 2', 'MIT', 'The Unlicesne']
        },
        {
          type: "input",
          name: "name",
          message: "Enter your full name for licensing"
        },
        {
          type: "input",
          name: "github",
          message: "What is your Github username?"
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?"
        },

    ]);

  }

    const licenseSelected = (answers) => {
      switch(answers.license) {
        case 'Apache 2':
          return '[![License](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'The Unlicense':
          return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

      }
    }
    //function to initialize program
      function init() {
        inquirer.prompt(questions).then(answers => {

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
      

/*create ReadMe page
function generateReadMe(answers) {
    return `
 
    `
}*/

