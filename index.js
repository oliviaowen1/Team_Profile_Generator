const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const manQuestions = [
    {type: 'input',
        name: 'manName',
        message: "What is the team managers name?",},
    {type: 'input',
        name: 'manID',
        message: "What is the managers ID?",},
    {type: "input",
        name: "manEmail",
        message: "What is the managers email address?"},
    {type: "input",
        name: "manPhone",
        message: "What's the managers office phone?"},
    {type: "list",
        name: "manAnother",
        message: "Do you want to add another team staff?",
        choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']}
];

const engQuestions = [
    {type: 'input',
        name: 'engName',
        message: "What is the engineers name?",},
    {type: 'input',
        name: 'engID',
        message: "What is the engineers ID?",},
    {type: "input",
        name: "engEmail",
        message: "What is the engineers email address?"},
    {type: "input",
        name: "engGitHub",
        message: "What's the engineers GitHub username?"},
    {type: "list",
        name: "engAnother",
        message: "Do you want to add another team staff?",
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
        name: "intSchool",
        message: "What is the interns school?"},
    {type: "list",
        name: "intAnother",
        message: "Do you want to add another team staff?",
        choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']}
];

function init() {
    inquirer.prompt(manQuestions)
    .then((data) => {

            if (data.manAnother == "Add an Engineer") {
                return engineerQs();
            }
            else if (data.manAnother == "Add an Intern") {
                return internQs();
            }
            else {
                starterHtml();
                return console.log("Your team has been complete!");
            }
    })
}

function engineerQs () {
    inquirer.prompt(engQuestions)
        .then((data) => {

            if (data.engAnother == "Add an Engineer") {
                return engineerQs();
            }
            else if (data.engAnother == "Add an Intern") {
                return internQs();
            }
            else {
                starterHtml();
                return console.log("Your team has been complete!");
            }
        });
}

function internQs (){
    inquirer.prompt(intQuestions)
        .then((data) => {

            if (data.intAnother == "Add an Engineer") {
                return engineerQ();
            }
            else if (data.intAnother == "Add an Intern") {
                return internQ();
            }
            else {
                starterHtml();
                return console.log("Your team has been complete!");
            }
        });
}


function starterHtml(data) {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    addHtml();
}
function addHtml(staff) {
    return new Promise(function(resolve, reject) {
        const name = staff.getName();
        const role = staff.getRole();
        const id = staff.getId();
        const email = staff.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = staff.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = staff.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = staff.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team staff");
        fs.appendFile("./output/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}


init();