


// link to created html page
const generatePage = require('./src/page-setup.js');


const inquirer = require('inquirer');
const fs = require('fs');

// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');

const setManager = () => {
  return inquirer.prompt([
      {
      type: 'input',
      message: 'Who is the manager of your team?',
      name: 'ManagerName',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },  
      {
      type: 'input',
      message: "Enter your manager's id number.",
      name: 'ManagerId',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      }, 
      {
      type: 'input',
      message:  "Enter your manager's email address.",
      name: 'ManagerEmail',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },  
      {
      type: 'input',
      message:  "Please enter your manager's office number.",
      name: 'ManagerOffice',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      }, 
  ]);
};


//employeeInfo = employeeData
const setEmployee = employeeInfo => {
  if (!employeeInfo.employees) {
    employeeInfo.employees = [];
  }
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to add an engineer or an intern to the team?',
      name: 'role',
      choices: ["Engineer", "Intern"],
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },
      {
      type: 'input',
      message: "What is the teammate's name?",
      name: 'Name',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },
      {
      type: 'input',
      message: "What is the teammate's id number?",
      name: 'Id',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },
      {
      type: 'input',
      message: "What is the teammate's email address?",
      name: 'Email',
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },
      {
      type: 'input',
      message: "What is the intern's school name?",
      name: 'School',
      when: (answer) => answer.role === "Intern",
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },
      {
      type: 'input',
      message: "What is the engineer's Github username?",
      name: 'Github',
      when: (answer) => answer.role === "Engineer",
      validate: input =>{
        if (input) {
          return true; 
        }else {
          console.log('Please answer the question!');
          return false;
        }
      }
      },
      {
      type: 'list', 
      message: 'Would you like to add another teammate?',
      name: 'Add',
      choices: ['Yes', 'No'],
      }
  ])
  .then(employeeData => {
    employeeInfo.employees.push(employeeData);
    if (employeeData.Add === "Yes") {
      return setEmployee(employeeInfo);
    } else if (employeeData.Add === "No") {
      return employeeInfo;
    }
  });
};

// projectAnswers = employeeAnswers
setManager()
.then(setEmployee)
.then(employeeInfo => {
  console.log(employeeInfo);
  const HTMLgen = generatePage(employeeInfo);

  fs.writeFile('./dist/teamprofilepage.html', HTMLgen, err => {
    if (err) throw new Error(err);
    console.log('Your file was created sucessfully!')
  })
})




