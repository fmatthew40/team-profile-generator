

// link to created html page
const generatePage = require('./src/generatefile.js');


const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const inquirer = require('inquirer');

const employeeArr  = [];



const managerData = () => {
    return inquirer.prompt (
[
{
    type: 'input',
    message: 'Who is the manager of your team?',
    name: 'managerName'
},  
{
    type: 'input',
    message: "Enter your manager's id number.",
    name: 'managerId'
}, 
{
    type: 'input',
    message:  "Enter your manager's email address.",
    name: 'managerEmail'
},  
{
    type: 'input',
    message:  "Please enter your manager's office number.",
    name: 'managerOffice'
}, 
{
    type: 'list',
    message: 'Would you like to add another team member?',
    name: 'addMember',
    choices: ["yes", "no"]
}
])
.then(managerInfo => {
    const {managerName, managerId, managerEmail, managerOffice} = managerInfo; 
    const manager = new Manager (managerName, managerId, managerEmail, managerOffice);
    employeeArr.push(manager);
    console.log(manager); 
    newTeammate();
})
};
managerData();

function newTeammate() {
    if (managerData.addMember = 'yes') {
        selectRole();
    }else{
        console.log("hiiiiiiiii");
    }
};

const selectRole = () => {
    return inquirer.prompt (
    [{
    type: 'list',
    message: 'Would you like to add an engineer or an intern?',
    name: 'select',
    choices: ["Engineer", "Intern"]
    },
    {
    type: 'input',
    message: "What is the teammate's name?",
    name: 'memberName'
    },
    {
    type: 'input',
    message: "What is the teammate's id number?",
    name: 'memberId'
    },
    {
    type: 'input',
    message: "What is the teammate's email address?",
    name: 'memberEmail'
    },
    {
    when: (answer) => answer.select === "Engineer",
    type: 'input',
    message: "What is the engineer's Github username?",
    name: 'engineerGithub',
    },
    {
    when: (answer) => answer.select === "Intern",
    type: 'input',
    message: "What is the Intern's school name?",
    name: 'internSchool',
    },
    {
    type: 'input',
    message: 'Would you like to add another team member?',
    name: 'addMember',
    choices: ["yes", "no"]
    }
])


    // .then(teamset => {

    //     let {memberName, memberId, memberEmail, engineerGithub, internSchool, addMember} = teamset;



    // .then(teamSet => {
    //     const {memberName, memberId, memberEmail, engineerGithub, internSchool} = teamSet; 
    //     if (selectRole.select = "Engineer"){
    //     const engineer = new Engineer(memberName, memberId, memberEmail, engineerGithub);
    //     employeeArr.push(engineer);
    // }
    //     if (selectRole.select = "Intern") {
    //     const intern = new Intern(memberName, memberId, memberEmail, internSchool);
    //     employeeArr.push(intern);
    // }
    //     if (selectRole.addMember = true) {
    //         return selectRole(employeeArr);
    //     }if (selectRole.addMember === false) {
    //         const newfile = (fileName, answers)  =>{
    //             let content = generatePage(answers);
    //             fs.writeFile(fileName, content, function (error) {
                    
    //                 if (error) {
    //                     return console.log(error)
    //                 }
    //                 console.log('Your file was created successfully!')
    //             });
    //         }
            
    //     }

    
// })
};

function addEngineer() {
    inquirer.prompt().then((response) => {
    
        let engineerName = response.memberName;
        let engineerId = response.memberId;
        let engineerEmail = response.memberEmail; 
        let engineerGithub = response.engineerGithub;

    const createEngineer = new Engineer (engineerName, engineerId, engineerEmail, engineerGithub);
    employeeArr.push(createEngineer);

    console.log(createEngineer);
    })
};









// const fileName = 'dist/teamprofile.html';

// const newfile = (fileName, answers)  =>{
//         let content = generatePage(answers);
//         fs.writeFile(fileName, content, function (error) {
            
//             if (error) {
//                 return console.log(error)
//             }
//             console.log('Your file was created successfully!')
//         });
//     }

// const end = function(){
//     console.log("Your file is being prepared.")
// }






