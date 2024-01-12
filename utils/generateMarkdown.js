// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'N/A') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return '';
}


// This function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'N/A') {
    return `https://opensource.org/licenses/${license}`
  } else {
    return ''
  }
}

// This function returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## License

Licensed under the ${license} license.
For more information, please visit:`;
  }
}

// This function generates the markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data.license)}      
## Description
    
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

Developer: ${data.credits}
        
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contribution

${data.contributing}

## Tests

${data.tests}

## Questions

For Questions or comments, please contact:
- GitHub: [${data.questionsGitHub}](https://github.com/${data.questionsGitHub})
- Email: [${data.questionsEmail}](mailto:${data.questionsEmail})`;
}

module.exports = generateMarkdown;
