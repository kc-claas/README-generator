// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [
    {   
        message: `What is your project title?`,
        name: `title`,
    },
    {
        message: `Please enter your description:`,
        name: `description`,
    },
    {
        message: `Please enter your installation instructions:`,
        name: `installation`,
    },
    {
        message: `Please enter your usage information:`,
        name: `usage`,
    },
    {
        message: `Please enter your contribution guidelines:`,
        name: `contribution`,
    },
    {
        message: `Please enter your test instructions:`,
        name: `test`,
    },
    {
        message: `Please enter your github username:`,
        name: `userName`,
    },
    {
        message: `Please enter your email address:`,
        name: `email`,
    },
    {
        message: `Please choose your license`,
        name: `license`,
        type: `list`,
        choices: [`MIT`, `GNU GPLv3`, `Apache 2.0`,`unlicensed`]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log(`README.md generated in /output directory`))
}

// TODO: Create a function to initialize app
// first .prompt questions, second .then with answers to call write function using imported generateMarkdown
function init() {
inquirer
    .prompt(questions)

    .then((responses) => {writeToFile(`./output/README.md`, generateMarkdown(responses))

    })

}

// Function call to initialize app
init();
