const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('James', 1234, 'james@email.com', 12);

    expect(manager.name).toBe('James');
    expect(manager.id).toEqual(1234);
    expect(manager.email).toBe('james@email.com');
    expect(manager.officeNumber).toEqual(55)
});

test('gets manager role', () => {
    const manager = new Manager('James', 1234, 'james@email.com', 55);

    expect(manager.getRole()).toBe('Manager');
})