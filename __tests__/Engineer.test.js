const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
    const engineer = new Engineer('James');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toEqual(expect.any(String));
});