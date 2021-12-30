

// link to created html page
const generatePage = require('./src/generatefile.js');


// const Manager = require('./lib/Manager');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
const fs = require('fs');
const inquirer = require('inquirer');

// const team = [];


// TODO: Create an array of questions for user input
const Manager = [
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

];

const Engineer = [
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
    
    ];

    const Role = [
        {
            type: 'list',
            message: 'Would you like to add an Enginner or an Intern?',
            name: 'role',
            choices: ["Engineer", "Intern"]
        },  
    ];

function addTeammate(answers) {
    if (Manager.addMember = "yes") {
        selectRole(answers);
    } if(Manager.addMember = 'no') {
        newfile(answers);
    }
};


const fileName = 'dist/teamprofile.html';

// TODO: Create a function to write file
const newfile = (fileName, answers)  =>{
    let content = generatePage(answers);
    fs.writeFile(fileName, content, function (error) {
        
        if (error) {
            return console.log(error)
        }
        console.log('Your file was created successfully!')
    });
}

// // TODO: Create a function to initialize Manager
const init =() => {
    inquirer.prompt(Manager).then(function (answers) {
        const fileName = 'dist/teamprofile.html';
        // newfile(fileName, answers)
        addTeammate(answers);
    });
}

// // TODO: Create a function to initialize Engineer
const initE =() => {
    inquirer.prompt(Engineer).then(function (answers) {
        const fileName = 'dist/teamprofile.html';
        // newfile(fileName, answers)
    });
}

const selectRole =(answers) => {
    inquirer.prompt(Role).then(function (answers) {
        const fileName = 'dist/teamprofile.html';
        // newfile(fileName, answers)
    });
}

// Function call to initialize app
init();

