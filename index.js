const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


// This is an empty array as it will add employees as they are added by the user
const employees = [];

// This function initialises the first questions function
function init() {
    htmlBase();
    manQuests();
}

// These are the managers questions
function manQuests() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team managers name? ",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the team managers ID? ",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the teams' Manager's email address: ",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter the teams' Manager's office phone number: ",
            name: 'officeNumber'
        },
        // The below takes the names of each question so we can reference the inputs later
    ]).then(function ({ name, id, email, officeNumber }) {
        let manager = new Manager(name, id, email, officeNumber);
    //    By pushing the below this pushes it to append to our page
        employees.push(manager);
        // This then run the next functions, to ask if more staff want to be added
        staffProfiles(manager);
        nextStaff();
    });
}

// This function allows the user to choose if they want to add more colleagues
function nextStaff() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            choices: [
                'Engineer',
                'Intern',
                'I do not wish to add anybody else'
            ],
            name: 'addStaff'
        },
        // depending on what the user selects this then runs the next function
    ]).then(function ({ addStaff }) {
        if (addStaff === 'Engineer') {
            return engQuestions();    
        } else if (addStaff === 'Intern') {
            return  intQuestions();
        } else {
            htmlFooter();
        }
    });
}

// Add Engineer Questions function
function engQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the new Engineer's name?  ",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the new Engineer's ID?  ",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the new Engineer's email address?  ",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter the Engineer's GitHub username:  ",
            name: 'github'
        },
    ]).then(function ({ name, id, email, github }) {
        let engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        staffProfiles(engineer)
        nextStaff();
    });
}

// Add Intern Questions function
function intQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Interns' name?  ",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the Interns' ID?  ",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the Interns' email address:  ",
            name: 'email'
        },
        {
            type: 'input',
            message: "Please enter the Interns' school :",
            name: 'school'
        },
    ]).then(function ({ name, id, email, school }) {
        let intern = new Intern(name, id, email, school);
        employees.push(intern);
        staffProfiles(intern)
        nextStaff();
    });
}

function htmlBase() {
    const html = `
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profiles</title>
</head>  
<body>
    
    <!-- Banner Section -->
    <section class="jumbotron jumbotron-fluid bg-danger text-white text-center">
        <div class="container">
            <h1 class="display-3">My Team</h1>
        </div>
    </section>
    <!-- Main Employee Card Section-->
    <main class="container">
        <div class="row">
    `;
    fs.writeFile('./dist/index.html', html, function (error) {
        if (error) {
            console.log(error);
        }
    });
}

function staffProfiles(member) {
    return new Promise(function (resolve, reject) {

        const name = member.getName();
        const id = member.getId();
        const email = member.getEmail();
        const role = member.getRole();

        let data = '';
        if (role === 'Engineer') {
            const github = member.getGithub();
            data = `
            <!-- Engineer Employee Card -->
            <div class="col d-sm-flex justify-content-center">
                <div class="card employee-card mt-4 bg-primary">
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
        } else if (role === 'Intern') {
            const school = member.getSchool();
            data = `
            <!-- Intern Employee Card -->          
            <div class="col d-sm-flex justify-content-center">
                <div class="card employee-card mt-4 bg-primary">
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>              
            `;
        } else {
            const officeNumber = member.getOfficeNum();
            data = `
            <!-- Manager Employee Card -->
            <div class="col d-sm-flex justify-content-center">
                <div class="card employee-card mt-4 bg-primary">
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>    
            `;
        }
        console.log("Team Member's Profile Added");
        fs.appendFile('./dist/index.html', data, function (error) {
            if (error) {
                return reject(error);
            };
            return resolve();
        });
    });
}

function htmlFooter() {
    const html = `
        </div>
    </main>  
    </footer>
    <!-- Bootstrap jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/1ac5a0514e.js" crossorigin="anonymous"></script>
    </body>
</html>
`;

    fs.appendFile("./dist/index.html", html, function (error) {
        if (error) {
            console.log(error);
        };
    });
    console.log("Success! Your index.html file has been created.");
}

init();
