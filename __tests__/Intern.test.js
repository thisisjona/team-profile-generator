const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Rob', 1234, 'rob@email.com', 'Yale');

    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual('Rob');
    expect(intern.id).toEqual(1234);
    expect(intern.email).toEqual('rob@email.com');
    expect(intern.school).toEqual('UT Austin');
    expect(intern.role).toEqual('Intern');
});

test('gets intern name', () => {
    const intern = new Intern('Rob', 1234, 'rob@email.com', 'UT Austin');

    expect(intern.name).toEqual('Rob');
    expect(intern.getName()).toBe(intern.name);
});

test('gets intern id', () => {
    const intern = new Intern('Rob', 1234, 'rob@email.com', 'UT Austin');

    expect(intern.id).toEqual(1234);
    expect(intern.getId()).toBe(intern.id);
});

test('gets intern email', () => {
    const intern = new Intern('Rob', 1234, 'rob@email.com', 'UT Austin');

    expect(intern.email).toEqual('rob@email.com');
    expect(intern.getEmail()).toEqual(intern.email);
})

test('gets intern role', () => {
    const intern = new Intern('Rob', 1234, 'rob@email.com', 'UT Austin');

    expect(intern.getRole()).toEqual('Intern');
})

test('gets intern school name', () => {
    const intern = new Intern('Rob', 1234, 'rob@email.com', 'UT Austin');

    expect(intern.school).toEqual('UT Austin');
    expect(intern.getSchool()).toEqual(intern.school);
})