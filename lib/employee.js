const inquirer = require("inquirer");

// Base class "Employee" will be extended by specialist postion classes
class Employee 
{
    // All employees will have a "name", "id", and "email"
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // All employees will have their name returned
    getName() 
    {
        // Inquirer will ask the user for their name. This will be applied to all classes
        return this.name;
    }
    
    // All employees will have their id returned
    getId()
    {
        return this.id;
    }

    // All employees will have their email returned
    getEmail()
    {
       return this.email;
    }

    // The default role of all employees will be "Employee". This will be changed
    //  specifically per class
    getRole()
    {
        return "Employee";
    }
}



// Export this class to be used by other classes
module.exports = Employee;