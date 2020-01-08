// Dependency from the employee class
const Employee = require("./employee");

// Manager class
class Manager extends Employee 
{
    // Constructor, define characteristics of a manager
    constructor(name, id, email, officeNumber)
    {
        // Characteristics of a manager also includes characteristics of an employee
        super(name, id, email);

        // The manager has a special characteristic of having an office number
        this.officeNumber = officeNumber;
    }

    // The role for this class
    getRole() 
    {
        // Will give us the role "Manager"
        return "Manager";
    }

    // The special characteristic that a Manager has
    getOfficeNumber() 
    {
        // Will give us the Manager's office number
        return this.officeNumber;
    }

}

// Export class to be used in a different file
module.exports = Manager;
