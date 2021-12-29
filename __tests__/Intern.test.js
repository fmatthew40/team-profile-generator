const Intern = require('../lib/Intern');

test('intern object', () => {
    const sample = "NAU";
    const intern = new Intern('Bill', 28, 'bill@yahoo.com', sample);
    expect(intern.school).toBe(sample);
    
  });

test('gets school', () => {
    const sample = "school";
    const intern = new Intern('Bill', 28, 'bill@yahoo.com', sample);
    expect(intern.getSchool()).toBe(sample);
  });

test('getRole()', () => {
    const sample = "Intern";
    const intern = new Intern('Bill', 28, 'bill@yahoo.com', "NAU");
    expect(intern.getRole()).toBe(sample);
  });




