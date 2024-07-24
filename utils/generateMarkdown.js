// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  if (license === `MIT`) {badge = `![Static Badge](https://img.shields.io/badge/License-MIT-blue)`}
  else if (license === `GNU GPLv3`) {badge = `![Static Badge](https://img.shields.io/badge/License-GNU_GPLv3-blue)`}
  else (badge = '')    
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link
  if (license === 'MIT') {link = `[MIT](https://choosealicense.com/licenses/mit/)`}
  else if (license === 'GNU GPLv3') {link = `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`}
  else {link = ''}
  return link

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section
if (license !== `unlicensed`) {
section = `This application is covered under the ${renderLicenseLink(license)} license`}
else {section = ''}
return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
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
