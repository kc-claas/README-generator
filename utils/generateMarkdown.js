// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license != `unlicensed`) {
const section = `This application is covered under the ${license} license`}
else {const section = ''}
return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
Installation[#installation]
Usage[#usage]
License[#license]
Contribution[#contribution]
Test[#test]
Questions[#questions]

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
${data.userName}
For additional questions, contact ${data.email}
`;
}

export default generateMarkdown;