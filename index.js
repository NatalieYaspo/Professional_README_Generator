// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
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
      message: 'How would someone install this app?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'How does a person use this app?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who should receive credits for this app?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Does this app have a license?',
        choices: ['MIT', 'GPLv3', 'Apache_2.0', 'BSD_2--Clause', 
        'BSD_3--Clause', 'Boost_1.0', 'AGPL_v3', 'GPL_v2',
          'LGPL_v3', 'MPL_2.0', 'Unlicense', 'N/A'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contribution guidelines for this app?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Are there tests that have been run on this?',
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
    ]

// Function to write README file
function writeToFile(data) {
    fs.writeFile(`./appOutput/README.md`, data, (err) =>
    err ? console.log(err) : console.log('Your README has been created!')
);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        return writeToFile(generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();