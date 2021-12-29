const Employee = require("../lib/Employee");

// test("Employee object", () => {
//     const employee = new Employee('Sara', 20, 'sara@yahoo.com');
//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
// })

// test('Employee Name', () => {
//     const employee = new Employee('Sara', 20, 'sara@yahoo.com');
//     expect(employee.getName()).toEqual(expect.any(String));
// })

// test('Employee ID', () => {
//     const employee = new Employee('Sara', 20, 'sara@yahoo.com');
//     expect(employee.getId()).toEqual(expect.any(Number));
// })

// test('Employee email', () => {
//     const employee = new Employee('Sara', 20, 'sara@yahoo.com');
//     expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
// })

// test('role', () => {
//     const employee = new Employee('Sara', 20, 'sara@yahoo.com');
//     expect(employee.getRole()).toEqual("Employee");
// })

test('new employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  })
  
  test('sets name', () => {
    const name = 'Matt';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  })

  test('get name', () => {
    const sample = 'Matt';
    const employee = new Employee(sample);
    expect(employee.getName()).toBe(sample);
  });
  
  test("sets id", () => {
    const sample = 10440;
    const employee = new Employee('Matt', sample);
    expect(employee.id).toBe(sample);
  })

  test('get id', () => {
    const sample = 10440;
    const employee = new Employee('Matt', sample);
    expect(employee.getId()).toBe(sample);
  });
  
  test('sets email', () => {
    const sample = 'matt@yahoo.com';
    const employee = new Employee('Matt', 10440, sample);
    expect(employee.email).toBe(sample);
  });
  
  test("gets email", () => {
    const sample = 'matt@yahoo.com';
    const employee = new Employee('Matt', 10440, sample);
    expect(employee.getEmail()).toBe(sample);
  });
  
  test('get role', () => {
    const sample = "Employee";
    const employee = new Employee('Matt', 10440, 'matt@yahoo.com');
    expect(employee.getRole()).toBe(sample);
  });


