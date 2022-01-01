// link to created html page
const generatePage = require('./src/page-setup.js');


const inquirer = require('inquirer');
const fs = require('fs');

// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');

// const employeeArr  = [];

// this is pageHTML 
// const takeData = generatePage(name, github);


// = promptUser  = answers = results
const setManager = () => {
  return inquirer.prompt([
      {
      type: 'input',
      message: 'Who is the manager of your team?',
      name: 'Manager-Name',
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
      name: 'Manager-Id',
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
      name: 'Manager-Email',
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
      name: 'Manager-Office',
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


//portfolioData = employeeData
const setEmployee = employeeData => {
  if (!employeeData.employees) {
    employeeData.employees = [];
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
      message: "What is the intern's name?",
      name: 'Intern-Name',
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
      message: "What is the intern's id number?",
      name: 'Intern-Id',
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
      message: "What is the intern's email address?",
      name: 'Intern-Email',
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
      message: "What is the intern's school name?",
      name: 'Intern-School',
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
      message: "What is the engineer's name?",
      name: 'Engineer-Name',
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
      type: 'input',
      message: "What is the engineer's id number?",
      name: 'Engineer-Id',
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
      type: 'input',
      message: "What is the engineer's email address?",
      name: 'Engineer-Email',
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
      type: 'input',
      message: "What is the engineer's Github username?",
      name: 'Engineer-Github',
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
  .then(answers => {
    employeeData.employees.push(answers);
    if (answers.Add === 'Yes') {
      return setEmployee(employeeData);
    } else {
      return employeeData;
    }
  })
};

// projectAnswers = employeeAnswers
setManager()
.then(setEmployee)
.then(employeeData => {
  console.log(employeeData);
})



// .then(results => console.log(results))
// .then(setEmployee)
// .then(employeeAnswers => console.log(employeeAnswers))
// .then(teamMember => {
//   employeeData.employees.push(teamMember)
//   if (employeeData.confirmAdd){
//     return setEmployee(employeeData);
//   }else {
//     return employeeData;
//   }
// });



// fs.writeFile('./dist/teamprofilepage.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Your file was created successfully!');
// });




