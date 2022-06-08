const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('James', 1234, 'james@email.com');

    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual('james@email.com')
});

test('gets employees name', () => {
    const employee = new Employee('James', 1234, 'james@email.com');

    expect(employee.getName()).toEqual(employee.name);
});

test('gets employee id', () => {
    const employee = new Employee('James', 1234, 'james@email.com');

    expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
    const employee = new Employee('James', 1234, 'james@email.com');

    expect(employee.getEmail()).toEqual(employee.email);
});

test('gets employee role', () => {
    const employee = new Employee('James', 1234, 'james@email.com');

    expect(employee.getRole()).toEqual('Employee');
});