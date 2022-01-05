const Engineer = require('../lib/Engineer.js');
const Team = require('../lib/create-site');

test("Can set GitHub for Engineer", () => {
    const engineerGithub = "JohnsGithub";
    const engineer = new Engineer("John", 1, "John@example.com", engineerGithub);
    expect(engineer.github).toBe(engineerGithub);
});

test("getRole() returns \"Engineer\"", () => {
    const engineerRole = "Engineer";
    const engineer = new Engineer("John", 1, "John@example.com", "JohnsGithub");
    expect(engineer.getRole()).toBe(engineerRole);
});

test("Can find Github username with getGithub()", () => {
    const engineerGithub = "JohnsGithub";
    const engineer = new Engineer("John", 1, "John@example.com", engineerGithub);
    expect(engineer.getGithub()).toBe(engineerGithub);
})