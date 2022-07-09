const Manager = require('../lib/Manager');

test('creates a manager', () => {
    const manager = new Manager('Mason');
});
test('set office number', () => {
    const testValue = 100;
    const i = new Manager('WaW', 1, 'manager@gmail.com', testValue);
    expect(i.officeNumber).toBe(testValue);
});
test('get office number', () => {
    const testValue = 100;
    const i = new Manager('WaW', 1, 'manager@gmail.com', testValue);
    expect(i.getOfficeNumber()).toBe(testValue);
});
