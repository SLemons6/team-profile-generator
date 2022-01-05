const Employee = require('../lib/Employee');

test("Create new Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test("Can name Employee", () => {
    const employeeName = "John";
    const employee = new Employee(employeeName);
    expect(employee.name).toBe(employeeName);
});

test("Can set Employee id", () => {
    const employeeId = 50;
    const employee = new Employee("John", employeeId);
    expect(employee.id).toBe(employeeId);
});

test("Can set Employee email", () => {
    const employeeEmail = "John@example.com";
    const employee = new Employee("John", 1, employeeEmail);
    expect(employee.email).toBe(employeeEmail);
});

test("Can find Employee's name via getName()", () => {
    const employeeName = "John";
    const employee = new Employee(employeeName);
    expect(employee.getName()).toBe(employeeName);
});

test("Can find Employee's id via getID()", () => {
    const employeeId = 50;
    const employee = new Employee("John", employeeId);
    expect(employee.getId()).toBe(employeeId);
});

test("Can find Employee's email via getEmail()", () => {
    const employeeEmail = "John@example.com";
    const employee = new Employee("John", 1, employeeEmail);
    expect(employee.getEmail()).toBe(employeeEmail);
});

test("getRole() returns \"Employee\"", () => {
    const employeeRole = "employee";
    const employee = new Employee("John", 1, "John@example.com");
    expect(employee.getRole()).toBe(employeeRole);
});