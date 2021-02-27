const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const manQuestions = [
    {type: 'input',
        name: 'engName',
        message: "What is the team managers name?",},
    {type: 'input',
        name: 'engID',
        message: "What is the managers ID?",},
    {type: "input",
        name: "engEmail",
        message: "What is the managers email address?"},
    {type: "input",
        name: "engGitHub",
        message: "What's the managers office phone?"},
    {type: "list",
        name: "engAnother",
        message: "Do you want to add another team member?",
        choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']}
];

const engQuestions = [
    {type: 'input',
        name: 'manName',
        message: "What is the engineers name?",},
    {type: 'input',
        name: 'manID',
        message: "What is the engineers ID?",},
    {type: "input",
        name: "manEmail",
        message: "What is the engineers email address?"},
    {type: "input",
        name: "manGitHub",
        message: "What's the engineers GitHub username?"},
    {type: "list",
        name: "manAnother",
        message: "Do you want to add another team member?",
        choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']}
];
const intQuestions = [
    {type: 'input',
        name: 'intName',
        message: "What is the interns name?",},
    {type: 'input',
        name: 'intID',
        message: "What is the interns ID?",},
    {type: "input",
        name: "intEmail",
        message: "What is the interns email address?"},
    {type: "input",
        name: "intGitHub",
        message: "What is the interns school?"},
    {type: "list",
        name: "intAnother",
        message: "Do you want to add another team member?",
        choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']}
];

function addMember() {
    inquirer.prompt([{

    }])
};