const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mason');
});
test('set email with constructor', () => {
    const testValue = 'employee@email.com';
    const i = new Employee('Foo', 1, testValue);
    expect(i.email).toBe(testValue);
});
test('set id with constructor', () => {
    const testValue = 123;
    const i = new Employee('Foo', testValue);
    expect(i.id).toBe(testValue);
});