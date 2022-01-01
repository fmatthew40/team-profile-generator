// link to created html page
const generatePage = require('./src/generatefile.js');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const inquirer = require('inquirer');

const employeeArr  = [];

const employeeData = () => {
    return inquirer.prompt (
[
  // {
  //   type: 'list',
  //   message: 'Your first step is to add a manager to the team.',
  //   name: 'role1',
  //   choices: ["Manager"]
  // },
{
    type: 'input',
    message: 'Who is the manager of your team?',
    name: 'managerName',
    // when: (answer) => answer.role === "Manager" || answer.role1 === "Manager",
},  
{
    type: 'input',
    message: "Enter your manager's id number.",
    name: 'managerId',
    // when: (answer) => answer.role === "Manager" || answer.role1 === "Manager",
}, 
{
    type: 'input',
    message:  "Enter your manager's email address.",
    name: 'managerEmail',
    // when: (answer) => answer.role === "Manager" || answer.role1 === "Manager",
},  
{
    type: 'input',
    message:  "Please enter your manager's office number.",
    name: 'managerOffice',
    // when: (answer) => answer.role === "Manager" || answer.role1 === "Manager",
}, 
{
  type: 'list',
  message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
  name: 'role',
  choices: ["Engineer", "Intern", "Finished"]
},
{
  type: 'input',
  message: "What is the engineer's name?",
  name: 'engineerName',
  when: (answer) => answer.role === "Engineer",
},
  {
  type: 'input',
  message: "What is the engineer's id number?",
  name: 'engineerId',
  when: (answer) => answer.role === "Engineer",
  },
  {
  type: 'input',
  message: "What is the engineer's email address?",
  name: 'engineerEmail',
  when: (answer) => answer.role === "Engineer",
  },
  {
  type: 'input',
  message: "What is the engineer's Github username?",
  name: 'engineerGithub',
  when: (answer) => answer.role === "Engineer",
  },
  {
  type: 'list',
  message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
  name: 'role',
  choices: ["Engineer", "Intern", "Finished"],
  when: (answer) => answer.role === "Intern",
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
    type: 'list',
    message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
    name: 'role',
    choices: ["Engineer", "Intern", "Finished"]
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
    },
    {
    type: 'list',
    message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
    name: 'role',
    choices: ["Engineer", "Intern", "Finished"],
    when: (answer) => answer.role === "Intern",
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

])
// .then(managerInfo => {
//     const {managerName, managerId, managerEmail, managerOffice} = managerInfo; 
//     const manager = new Manager (managerName, managerId, managerEmail, managerOffice);
//     employeeArr.push(manager);
//     console.log(manager); 
//     choose();
// })

  .then(answer => {
    switch (answer.role) {
      case 'Engineer':
        // setEngineer()
        // break;
      case 'Intern': 
        // setIntern();
        // break;
      case 'Finished': 
      console.log('Your team is set!')
      newFile(answer);
      // newFile(answer);
    }
  })
};

// function choose() {
    
//     return inquirer.prompt (
//         {
//         type: 'list',
//         message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
//         name: 'role',
//         choices: ["Engineer", "Intern", "Finished"]
//     }
//     )
// .then(answer => {
//     switch (answer.role) {
//         case 'Engineer':
//             setEngineer();
//             break;
//         case 'Intern':
//             setIntern();
//             break;
//         case 'Finished':
//             console.log('Your team is set!')
//             newFile(answer);
           
//     }
// })
// };

// const setEngineer = () => {
//     return inquirer.prompt (
//     [{
//     type: 'input',
//     message: "What is the engineer's name?",
//     name: 'engineerName'
//     },
//     {
//     type: 'input',
//     message: "What is the engineer's id number?",
//     name: 'engineerId'
//     },
//     {
//     type: 'input',
//     message: "What is the engineer's email address?",
//     name: 'engineerEmail'
//     },
//     {
//     type: 'input',
//     message: "What is the engineer's Github username?",
//     name: 'engineerGithub'
//     }
// ])

//    .then(engineerSet => {
//         const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerSet; 
//         if (setEngineer.select = "Engineer"){
//         const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
//         employeeArr.push(engineer);
//         console.log(engineer);
//         choose();
//     }
//     })
// };

// const setIntern = () => {
//     return inquirer.prompt (
//     [{
//     type: 'input',
//     message: "What is the intern's name?",
//     name: 'internName'
//     },
//     {
//     type: 'input',
//     message: "What is the intern's id number?",
//     name: 'internId'
//     },
//     {
//     type: 'input',
//     message: "What is the intern's email address?",
//     name: 'internEmail'
//     },
//     {
//     type: 'input',
//     message: "What is the intern's school name?",
//     name: 'internSchool',
//     },
// ])

//    .then(internSet => {
//         const {internName, internId, internEmail, internSchool} = internSet; 
//         if (setIntern.select = "Intern"){
//         const intern = new Intern(internName, internId, internEmail, internSchool);
//         employeeArr.push(intern);
//         console.log(intern);
//         choose();
//     }
// })
// };

// const fileName = 'dist/teamprofile.html';

// const newFile = (fileName, answers)  => {
//         let content = generatePage(answers);
//         fs.writeFile(fileName(employeeArr), content, function (error) {
            
//             if (error) {
//                 return console.log(error)
//             }
//             console.log('Your file was created successfully!')
//         });
//     }

    const fileName = 'dist/teamprofile.html';

    // const newFile = ()  => {
    //         let content = generatePage();
    //         fs.writeFile(fileName(employeeArr), content, function (error) {
                
    //             if (error) {
    //                 return console.log(error)
    //             }
    //             console.log('Your file was created successfully!')
    //         });
    //     }
    // fs.writeFile(fileName, employeeArr, (err) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data);
    //     console.log("Your file was created successfully!");
    // })


// function newFile () {
//     fs.writeFile(fileName, (employeeArr).toString(), function(err) {
//         if (err) {
//         console.log(err);
//     } 
//     console.log("Your file was created successfully!");
//     })
// };

// function newFile (data) {
//     fs.writeFile(fileName, data, function(err) {
//         if (err) {
//         console.log(err);
//     } 
//     console.log("Your file was created successfully!");
//     })
// };


// const newFile = data => {
//     fs.writeFile(fileName, generatePage(JSON.stringify(employeeArr.toString())), err => {
//         // if there is an error 
//         if (err) {
//             console.log(err);
//             return;
//         // when the profile has been created 
//         } else {
//             console.log("Your team profile has been successfully created! Please check out the index.html")
//         }
//     })
// };

const newFile = data => {
    fs.writeFile(fileName, generatePage(data), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your file has been created successfully!")
        }
    })
};



employeeData();


