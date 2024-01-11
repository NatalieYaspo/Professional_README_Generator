// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];  //REMOVE?

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
    },
    
    {
      type: 'input',
      message: 'What does this project do?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What does this project do?', //need something else here
        name: 'tableOfContents',
    },
    {
      type: 'input',
      message: 'How would someone install this app?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'How does a person use this app?',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Does this app have a license?',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause License', 
        'BSD 3-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
         'Eclipse Public License 2.0', 'GNU AGPL v3', 'GNU GPL v2',
          'GNU LGPL v3', 'Mozilla Public License 2.0', 'The Unlicense', 'N/A'], //ADD other licenses here
        name: 'liscense',
    },
    {
        type: 'input',
        message: 'Contribution guidelines for this app?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How could someone test this app?', //Need a different Q here
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'questionsGitHub',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'questionsEmail',
    },
    ])

    .then((response) => {
        const questionsEmail = response.questionsEmail
        console.log(questionsEmail);
        fs.writeFile('README2.md', JSON.stringify(response, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
