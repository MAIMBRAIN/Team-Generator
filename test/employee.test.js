// This file will test the employee class
// This test is dependent on the employee class
const Employee = require("../lib/employee");

// Test 1: create a new Employee
test("Can instantiate Employee instance", () => 
{
  // When an employee is created
  const e = new Employee();

  // Tell the program to expect the new instantiation of an employee to be an object
  expect(typeof(e)).toBe("object");
});

// Test 2: set employee's name
test("Can set name via constructor arguments", () => 
{
  // "Alice" is a placeholder for a string name
  const name = "Alice";
  
  // "e" will represent the instantiation of a new employee's name
  const e = new Employee(name);

  // Tell the program to expect the name given to be the name of the employee
  expect(e.name).toBe(name);
});

// Test 3: set employee's id
test("Can set id via constructor argument", () => 
{
  // The id will define which employee was created 1st, 2nd, 3rd...
  const testValue = 100;

  // "e" will represent the instantiation of a new employee's name string, with their id
  const e = new Employee("Foo", testValue);

  // Tell the program to expect the id to be the same as the test value integer
  expect(e.id).toBe(testValue);
});

// Test 4: set employee's email
test("Can set email via constructor argument", () => 
{
  // "test@test.com" is a placeholder for a string email
  const testValue = "test@test.com";

  // "e" will represent the instantiation of a new employee's email. The name and id are placeholders
  const e = new Employee("Foo", 1, testValue);

  // Tell the program to expect the email to be the same as the test value string
  expect(e.email).toBe(testValue);
});

// Test 5: ask user to provide a name
test("Can get name via getName()", () => 
{
  // "Alice" will be a placeholder for the employee's name string
  const testValue = "Alice";

  // "e" will represent the instantiation of a new employee's getName() function
  const e = new Employee(testValue);

  // Tell the program to expect the function to give you a string
  expect(e.getName()).toBe(testValue);
});

// Test 6: ask user to provide an id
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

// Test 7: ask user to provide an email
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// Test 8: the role should return employee
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
