// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  switch(license) {
    case 'MIT': 
      badge = `[![Static Badge](https://img.shields.io/badge/License-MIT-blue)]`
    break
    case `GNU GPLv3`: 
      badge = `[![Static Badge](https://img.shields.io/badge/License-GNU_GPLv3-blue)]`
    break
    case 'Apache 2.0': 
    badge = `[![Static Badge](https://img.shields.io/badge/License-Apache_2.0-blue)]`
    break
    case 'unlicensed' :
      badge = ''
    break
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link
  if (license === 'unlicensed') 
    {link = ''}
  else 
    {link = '(./LICENSE)'}
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section
if (license !== `unlicensed`) {
section = `This application is covered under the [${license}]${renderLicenseLink(license)} license`}
else {section = ''}
return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

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
Github: [${data.userName}](https://github.com/${data.userName})

For additional questions, contact ${data.email}
`;
}

export default generateMarkdown;
