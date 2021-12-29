const Manager = require('../lib/Manager');

test('officer number', () => {
    const sample = 'C104';
    const manager = new Manager('Steve', 109, 'steve@yahoo.com', sample);
    expect(manager.officeNumber).toBe(sample);
  });

  test('get officerNumber', () => {
    const sample = 'C104';
    const manager = new Manager('Steve', 109, 'steve@yahoo.com', sample);
    expect(manager.getOfficeNumber()).toBe(sample);
  });

test('getRole()', () => {
    const sample = "Manager";
    const manager = new Manager('Steve', 109, 'steve@yahoo.com', 'C104');
    expect(manager.getRole()).toBe(sample);
  });

