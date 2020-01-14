// Dependency
const Employee = require("./employee");

// Engineer class
class Engineer extends Employee
{
    // Constructor to build Engineer data
    constructor(name, id, email, github)
    {
        // Pull the parameters from the employee class
        super(name, id, email);

        // Engineer's have a GitHub Username
        this.github = github;
    }

    // Will return the role of this employee as "engineer"
    getRole()
    {
        return "Engineer";
    }

    // Special characteristic that engineers have
    getGithub()
    {
        return this.github;
    }
}

// Export to be used in app.js
module.exports = Engineer;