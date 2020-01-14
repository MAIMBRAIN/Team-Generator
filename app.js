// Dependencies
// Core Node.js dependencies
const path = require("path");
const fs = require("fs");

// NPM modules
const inquirer = require("inquirer");

// Classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// HTML renderer
const render = require("./lib/htmlRenderer");


//when used it will put an html file called team.html and put it into the output folder 
const outputPath = path.resolve(__dirname, "output", "team.html");

// make an empty array for the team members
const teamMembers = [];
// make and array of store employee id

// make a main app function that holds the logic
function mainApp() 
{
    // A function that creates the team
    function createTeam()
    {
        // There will only be one manager so we will call the manager() first
        manager();

        //use inquirer to allow the user the options to add engineer, intern, 
        //or if you dont want to add another member
        inquirer.prompt([
            {
                name: "createTeam",
                type: "list",
                message: "Would you like to add a team member?",
                choices: ["Engineer", "Intern", "No"]
            }
        ]).then(res)
        {
            if(res.createTeam === "Engineer")
            {
                engineer();
            }
            else if(res.createTeam === "Intern")
            {
                intern();
            }
            else
            {
                return;
            }
        }
    }
    
    // A function that creates the manager
    function manager()
    {
        // use inquirer for user to answer questions
        inquirer.prompt(
            {
                name: "name",
                type: "input",
                message: "What is your name?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your E-mail?"
            },
            {
                name: "officeNum",
                type: "input",
                message: "What is your Office Number?"
            }
        ).then(res)
        {
            const manager = new Manager(res.name, indexOf("manager"), res.email, res.officeNum)

            teamMembers.push(manager);
        }
    }

    // A function that creates the engineer
    function engineer()
    {
        // use inquire for user to answer questions
        inquirer.prompt(
            {
                name: "name",
                type: "input",
                message: "What is your name?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your E-mail?"
            },
            {
                name: "github",
                type: "input",
                message: "What is your GitHub Username?"
            }
        ).then(res)
        {
            const eng = new Engineer(res.name, indexOf("eng"), res.email, res.github)

            teamMembers.push(eng)
        }
    }
  
    // A funtion that creates the intern
    function intern()
    {
        // use inquire for user to answer questions
        inquirer.prompt(
            {
                name: "name",
                type: "input",
                message: "What is your name?"
            },
            {
                name: "email",
                type: "input",
                message: "What is your E-mail?"
            },
            {
                name: "school",
                type: "input",
                message: "What school are you attending?"
            }
        ).then(res)
        {
            const intern = new Intern(res.name, indexOf("intern"), res.email, res.school);

            teamMembers.push(intern);
        }
    }

    // This function takes the team members that was added to the teamMembers array and will create an html file
    // and send it the to the out put folder
    function buildTeam() 
    {
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    buildTeam();
    console.log(teamMembers);
}


mainApp();

