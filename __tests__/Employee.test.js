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
})