const Manager = require('../lib/Manager');

test("Can set office number for Manager", () => {
    const managerOfficeNumber = 25;
    const manager = new Manager("John", 1, "John@example.com", managerOfficeNumber);
    expect(manager.officeNumber).toBe(managerOfficeNumber);
});

test("getRole() returns \"Manager\"", () => {
    const managerRole = "Manager";
    const manager = new Manager("John", 1, "John@example.com", 25);
    expect(manager.getRole()).toBe(managerRole);
});

test("Can find manager's office numbrer with getOfficeNumber()", () => {
    const managerOfficeNumber = 25;
    const manager = new Manager("John", 1, "John@example.com", managerOfficeNumber);
    expect(manager.getOfficeNumber()).toBe(managerOfficeNumber);
});