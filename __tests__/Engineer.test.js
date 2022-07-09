const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const engineer = new Engineer('Mason');
});
test('set github w/ con', () => {
    const testValue = 'GitHubAccount';
    const i = new Engineer('WaW', 420, 'engineer@gmail.com', testValue);
    expect(i.github).toBe(testValue);
})
test('get Github method', () => {
    const testValue = 'GitHubAccount';
    const i = new Engineer('WaW', 69, 'engineer@gmail.com', testValue);
    expect(i.getGitHub()).toBe(testValue);
});