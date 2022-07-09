//Packages/Dep
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

//Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/template.js');

//Arrays
let data = []
const teamArr = [];
const idArr = [];

//Application
function startApp(){

  // Prompt user to create a manager when application starts
  function addManager() {
    console.log("Start building your team profile");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What's the manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter the team's manager's name.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid Manager's ID.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter the manager's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address can't be null.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What's the manager's office number? [Ex: 123456789]",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Please enter a actual phone number.";
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeam();
    });
}

function addTeam() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "nextSteps",
        message: "What do you want to do now?",
        choices: ["Add an Engineer", "Add an Intern", "Done with my Team"],
      },
    ])
    .then((userSelection) => {
      if (userSelection.nextSteps === "Add an Engineer") {
        addEngineer(data);
      } else if (userSelection.nextSteps === "Add an Intern") {
        addIntern(data);
      } else if (userSelection.nextSteps === "Done with my Team") {
        generateHTML(data);
      }
    });
}
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What's the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What's the intern's id?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid Intern's ID.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's the intern's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address can't be empty.";
            }
        },
        {
            //i dont like ASU
            type: "input",
            name: "internSchool",
            message: "What'school does the intern go to?",
            validate: answer => {
                if (answer !== "" || answer == "ASU") {
                    return true;
                }
                return "Please enter valid school, not ASU.";
            }
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArr.push(intern);
        idArr.push(answers.internId);
        addTeam();
    });
}
//Engineer Selection
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Engineer's name can't null.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the engineer's id?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter a valid ID.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the engineer's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Email address cant be null.";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter engineers github.";
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        addTeam();
    });
}



function generateHTML() {

    // Create dist directory for index.html if it doesnt exist
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    console.log("Generating Team Profile.... ");
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}

addManager();
}  
startApp();