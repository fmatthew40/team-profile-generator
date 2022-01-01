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
      name: 'Manager-Name'
      },  
      {
      type: 'input',
      message: "Enter your manager's id number.",
      name: 'Manager-Id'
      }, 
      {
      type: 'input',
      message:  "Enter your manager's email address.",
      name: 'Manager-Email'
      },  
      {
      type: 'input',
      message:  "Please enter your manager's office number.",
      name: 'Manager-Office'
      }, 
  ]);
};

const setEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
      name: 'role',
      choices: ["Engineer", "Intern", "Finished"],
      },
      {
      type: 'input',
      message: "What is the intern's name?",
      name: 'internName',
      when: (answer) => answer.role === "Intern",
      },
      {
      type: 'input',
      message: "What is the intern's id number?",
      name: 'internId',
      when: (answer) => answer.role === "Intern",
      },
      {
      type: 'input',
      message: "What is the intern's email address?",
      name: 'internEmail',
      when: (answer) => answer.role === "Intern",
      },
      {
      type: 'input',
      message: "What is the intern's school name?",
      name: 'internSchool',
      when: (answer) => answer.role === "Intern",
      },
      {
      type: 'input',
      message: "What is the engineer's name?",
      name: 'engineerName1',
      when: (answer) => answer.role === "Engineer",
      },
      {
      type: 'input',
      message: "What is the engineer's id number?",
      name: 'engineerId1',
      when: (answer) => answer.role === "Engineer",
      },
      {
      type: 'input',
      message: "What is the engineer's email address?",
      name: 'engineerEmail1',
      when: (answer) => answer.role === "Engineer",
      },
      {
      type: 'input',
      message: "What is the engineer's Github username?",
      name: 'engineerGithub1',
      when: (answer) => answer.role === "Engineer",
      }
  ]);
};

// projectAnswers = employeeAnswers
setManager()
.then(results => console.log(results))
.then(setEmployee)
.then(employeeAnswers => console.log(employeeAnswers));



// fs.writeFile('./dist/teamprofilepage.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Your file was created successfully!');
// });




