const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Rob', 1234, 'rob@email.com', 'pwdubs21');

    expect(engineer).toEqual(expect.any(Object));
    expect(engineer.name).toEqual('Rob');
    expect(engineer.id).toEqual(1234);
    expect(engineer.email).toEqual('rob@email.com');
    expect(engineer.github).toEqual('pwdubs21');
    expect(engineer.role).toEqual('Engineer');
});

test('gets engineer name', () => {
    const engineer = new Engineer('Rob', 1234, 'rob@email.com', 'pwdubs21');

    expect(engineer.name).toEqual('Rob');
    expect(engineer.getName()).toBe(engineer.name);
});

test('gets engineer id', () => {
    const engineer = new Engineer('Rob', 1234, 'rob@email.com', 'pwdubs21');

    expect(engineer.id).toEqual(1234);
    expect(engineer.getId()).toBe(engineer.id);
});

test('gets engineer email', () => {
    const engineer = new Engineer('Rob', 1234, 'rob@email.com', 'pwdubs21');

    expect(engineer.email).toEqual('rob@email.com');
    expect(engineer.getEmail()).toEqual(engineer.email);
})

test('gets engineer role', () => {
    const engineer = new Engineer('Rob', 1234, 'rob@email.com', 'pwdubs21');

    expect(engineer.getRole()).toEqual('Engineer');
})

test('gets engineer github name', () => {
    const engineer = new Engineer('Rob', 1234, 'rob@email.com', 'pwdubs21');

    expect(engineer.github).toEqual('pwdubs21');
    expect(engineer.getGithub()).toEqual(engineer.github);

})