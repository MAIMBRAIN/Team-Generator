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
    // There will only be one manager so we will call the manager() first
    manager();

    // A function that creates the manager
    function manager()
    {
        // use inquirer for user to answer questions
        inquirer.prompt(
            {
                name: "name",
                type: "input",
                message: "What is the manager's name?"
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
            // Create a new manager
            const manager = new Manager(res.name, indexOf("manager"), res.email, res.officeNum)

            // Then add the new manager to the team
            teamMembers.push(manager);

            // Finally, ask to add more employees
            createTeam();
        }
    }

    // A function that creates the team
    function createTeam()
    {
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
            // Try using a switch!
            switch (res.createTeam)
            {
                // If the response is "Engineer" then run the engineer function
                case "Engineer": engineer();
                    break;
                
                // If the response is "Intern" then run the engineer function
                case "Intern": intern();
                    break;

                // Otherwise finish and build the team
                default: buildTeam();
                    break;
            }

            //  Working If statement
            // If the response is "Engineer" then run the engineer function
            // if(res.createTeam === "Engineer")
            // {
            //     engineer();
            // }
            // If the response is "Intern" then run the engineer function
            // else if(res.createTeam === "Intern")
            // {
            //     intern();
            // }
            // Otherwise finish and build the team
            // else
            // {
            //     buildTeam();
            // }
            console.log(teamMembers);
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
            // Create a new Engineer
            const eng = new Engineer(res.name, indexOf("eng"), res.email, res.github)

            // Then add the Engineer to the team
            teamMembers.push(eng)

            // Ask if the user would like to add more team members
            createTeam();
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
            // Create a new intern
            const intern = new Intern(res.name, indexOf("intern"), res.email, res.school);

            // Add the intern to the team
            teamMembers.push(intern);

            // Ask if the user would like to add more team members
            createTeam();
        }
    }

    // This function takes the team members that was added to the teamMembers array and will create an html file
    // and send it the to the output folder
    function buildTeam() 
    {
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
}

mainApp();