const Engineer = require('../lib/Engineer.js');
const Team = require('../lib/create-site');

test('create an engineer object', () => {
    const engineer = new Engineer('James');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's id value", () => {
    const engineer = new Engineer('James');

    expect(engineer.getID()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's email value", () => {
    const engineer = new Engineer('James');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test("get's engineer's github value", () => {
    const engineer = new Engineer('James');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});