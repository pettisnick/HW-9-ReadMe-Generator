const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//array of questions for the user
const questions = [

    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the instructions for installation?",
    },
    {
      type: "input",
      name: "usage",
      message: "List any usage information.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter any contribution the guidelines for the project",
    },
    {
      type: "input",
      name: "test",
      message: "How do you test out your projects?",
    },
    {
      type: "list",
      name: "license",
      message: "Please chose a license for this project",
      choices: ['Apache 2', 'MIT', 'The Unlicesne'],
    },
    {
      type: "input",
      name: "name",
      message: "Enter your full name for licensing",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },

  ];


//function to initialize program
function init() {
  //A series of questions being asked to the User in order to fill his/her readme
  inquirer.prompt(questions).then(data) => {
    //New 'key' for license and badge
    data['licenseBdge'] = ""

    if (data.license == "Apache 2") { data.licenseBdge = `[![License](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` };
    if (data.license == "MIT") { data.licenseBdge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` };
    if (data.license == "The Unlicense") { data.licenseBdge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)` };
    newData = [data]
    //console.log(newAnswers);
    //Returning the 'answers' to the array
    return newData
  })
  
  //The template for the ReadMe begins
  const output = `# ${data.title} ${licenseBdge}
            
            ###
            
            <br>
            
            ## Description
            
              * ${data.description}
              
            ## Table of Contents
            
            [Installation](#installation)
            
            [Usage](#usage)
            
            [License](#license)
            
            [Contributing]{#contributing}

            [Tests]{#tests}

            [Known Bugs]{#known-bugs}

            [Future Developement]{#future-development}

            [Questions]{#questions}

            ## Installation

              * ### How to install ${data.title}

                * ${data.installation}
            
            ## Usage
              
              * ${data.usage}

            ## License

            ${data.license}

            ## Contributing

              * ### Contributing to ${data.title}
              
                * ${data.constribution}
                
            ## Tests
            
              * ${data.test}
              
            ## Known Bugs
            
              * ${data.issues}
              
            ## Questions

              *Please feel free to reach out to me if you have any other questions

                * https://github.com/${data.github}

                * ${data.email}`;
                //The template for the ReadMe ends


  //creating the README.md file
  fs.writeFile('README.md', output, function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}
        

//function call to initialize program
init();


