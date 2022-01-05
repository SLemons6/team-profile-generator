const Intern = require('../lib/Intern');

test("Can set school for Intern", () => {
    const internSchool = "MIT";
    const intern = new Intern("John", 1, "John@example.com", internSchool);
    expect(intern.school).toBe(internSchool);
});

test("getRole() returns \"Intern\"", () => {
    const internRole = "Intern";
    const intern = new Intern("John", 1, "John@example.com", "MIT");
    expect(intern.getRole()).toBe(internRole);
});

test("Can find intern's school with getSchool()", () => {
    const internSchool = "MIT";
    const intern = new Intern("John", 1, "John@example.com", internSchool);
    expect(intern.getSchool()).toBe(internSchool);
});