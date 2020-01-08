// Dependency
const Employee = require("./employee");

// Intern Class
class Intern extends Employee
{
    // Constructor for Intern
    constructor(name, id, email, school)
    {
        // Pull parameters from the employee class
        super(name, id, email);

        // Special characteristic of an Intern
        this.school = school;
    }

    // getRole() will say that this employee is an "Intern"
    getRole()
    {
        return "Intern";
    }

    // getSchool() will say what school the intern is from
    getSchool()
    {
        return this.school;
    }
}

// Export Intern class to be used in app.js
module.exports = Intern;