const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jimbob', 1234, 'jimbob@email.com', 'bobdawg72');

    expect(engineer.name).toBe('Jimbob');
    expect(engineer.id).toEqual(1234);
    expect(engineer.email).toBe('jimbob@email.com');
    expect(engineer.github).toBe('bobdawg72');
});

test('gets engineer github username', () => {
    const engineer = new Engineer('Jimbob', 1234, 'jimbob@email.com', 'bobdawg72');

    expect(engineer.getGithub()).toBe(engineer.github);
})

test('gets engineer role', () => {
    const engineer = new Engineer('Jimbob', 1234, 'jimbob@email.com', 'bobdawg72');

    expect(engineer.getRole()).toBe('Engineer');
})