

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
])
.then(managerInfo => {
    const {managerName, managerId, managerEmail, managerOffice} = managerInfo; 
    const manager = new Manager (managerName, managerId, managerEmail, managerOffice);
    employeeArr.push(manager);
    console.log(manager); 
    choose();
})
};

function choose() {
    
    return inquirer.prompt (
        {
        type: 'list',
        message: 'Would you like to add an engineer or an intern to the team? Or are you finished?',
        name: 'role',
        choices: ["Engineer", "Intern", "Finished"]
    }
    )
.then(answer => {
    switch (answer.role) {
        case 'Engineer':
            setEngineer();
            break;
        case 'Intern':
            setIntern();
            break;
        case 'Finished':
            console.log('Your team is set!')
            createTeam();
    }
})
};

// const role = () => {
//     return inquirer.prompt (
//     [{
//     type: 'list',
//     message: 'Would you like to add an engineer or an intern?',
//     name: 'select',
//     choices: ["Engineer", "Intern"]
//     }]
//     )
// .then(answer => {
//     console.log(answer);
//     if (select = "Engineer") {
//     setEngineer();
//     } if (select = "Intern") {
//     setIntern();
//     }
// })
// };


// function role() {
//     return inquirer.prompt (
//     [{
//     type: 'list',
//     message: 'Would you like to add an engineer or an intern?',
//     name: 'select',
//     choices: ["Engineer", "Intern"]
//     }]
//     )
// .then(answer => {
//     console.log(answer);
//     if (role.select = "Engineer") {
//     setEngineer();
//     }    
// })
// };

const setEngineer = () => {
    return inquirer.prompt (
    [{
    type: 'input',
    message: "What is the engineer's name?",
    name: 'engineerName'
    },
    {
    type: 'input',
    message: "What is the engineer's id number?",
    name: 'engineerId'
    },
    {
    type: 'input',
    message: "What is the engineer's email address?",
    name: 'engineerEmail'
    },
    {
    type: 'input',
    message: "What is the engineer's Github username?",
    name: 'engineerGithub'
    }
])

   .then(engineerSet => {
        const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerSet; 
        if (setEngineer.select = "Engineer"){
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        employeeArr.push(engineer);
        console.log(engineer);
    }
    })


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




const setIntern = () => {
    return inquirer.prompt (
    [{
    type: 'input',
    message: "What is the intern's name?",
    name: 'internName'
    },
    {
    type: 'input',
    message: "What is the intern's id number?",
    name: 'internId'
    },
    {
    type: 'input',
    message: "What is the intern's email address?",
    name: 'internEmail'
    },
    {
    type: 'input',
    message: "What is the intern's school name?",
    name: 'internSchool',
    },
])

   .then(internSet => {
        const {internName, internId, internEmail, internSchool} = internSet; 
        if (setIntern.select = "Intern"){
        const intern = new Intern(internName, internId, internEmail, internSchool);
        employeeArr.push(intern);
        console.log(intern);
    }
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




managerData();


