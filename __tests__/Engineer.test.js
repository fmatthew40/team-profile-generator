const Engineer = require("../lib/Engineer");


 test('Engineer object', () => {
    const sample = "paul123";
    const engineer = new Engineer('Paul', 33, "paul@yahoo.com", sample);
    expect(engineer.github).toBe(sample);
  });
  
  test('getRole', () => {
    const sample = "Engineer";
    const engineer = new Engineer('Paul', 33, 'paul@yahoo.com', 'paul123');
    expect(engineer.getRole()).toBe(sample);
  });
  
  test('github username', () => {
    const sample = 'paul123';
    const engineer = new Engineer('Paul', 33, 'paul@yahoo.com', sample);
    expect(engineer.getGithub()).toBe(sample);
  });