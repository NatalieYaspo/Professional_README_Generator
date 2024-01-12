// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause License', 
        'BSD 3-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal',
         'Eclipse Public License 2.0', 'GNU AGPL v3', 'GNU GPL v2',
          'GNU LGPL v3', 'Mozilla Public License 2.0', 'The Unlicense', 'N/A'], //ADD other licenses here
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contribution guidelines for this app?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Are there tests that have been run on this?', //Need a different Q here
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

    .then(({projectTitle, description, installation, usage, credits, license, contributing, tests, questionsGitHub, questionsEmail}) => {
        const readMeTemplate = `# ${projectTitle}
        
## Description
    
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

Developer: ${credits}
        
## License

${license}



## Contribution

${contributing}

## Tests

${tests}

## Questions

For Questions or comments, please contact:
- GitHub: [${questionsGitHub}](https://github.com/${questionsGitHub})
- Email: [${questionsEmail}](mailto:${questionsEmail})`;

        //Run function to write the file
        writeToFile(projectTitle, readMeTemplate);
    }
    );

// TODO: Create a function to write README file
function writeToFile(projectTitle, data) {
    // fs.writeFile(`./appOutput/${title.toLowerCase().split(' ').join('')}README.md`, data, (err) =>
    // err ? console.log(err) : console.log('Your README has been created!')
    fs.writeFile(`./appOutput/README.md`, data, (err) =>
    err ? console.log(err) : console.log('Your README has been created!')
);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
