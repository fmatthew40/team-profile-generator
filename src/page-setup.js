




const generateCards = employeesArray => {
  const engineerCard = employeesArray.filter(employee =>{
    switch (employee.role) {
    case "Engineer":
      return true;
    case "Intern":
      return false;
    }
  });
const internCard = employeesArray.filter(employee => {
  switch (employee.role) {
    case "Intern":
      return true;
    case "Engineer":
      return false;
    }
});

const addEngineer = engineerCard.map(({ role, Name, Id, Email, Github }) => {
  return`
  
  <div class="crd col-sm-6">
  <div class="row">
  <div class="card-body">
  <h5 class="card-title">${role}</h5>
  <ul>
    <li>Name: ${Name}</li>
    <li>ID Number: ${Id}</li>
    <li>Github Link: <a href="https://github.com/${Github}" target="_blank">${Github}</a></a>
  </ul>
  <a href="#" class=""><a href="mailto:${Email}">Email: ${Email}</a>
  </div>
  </div>
  </div>
  </div>
`;
  });

  const addIntern = internCard.map(({ role, Name, Id, Email, School }) => {
    return`
 
    <div class="crd col-sm-6">
    <div class="row">
    <div class="card-body">
    <h5 class="card-title">${role}</h5>
    <ul>
      <li>Name: ${Name}</li>
      <li>ID Number: ${Id}</li>
      <li>School: ${School}</li>
    </ul>
    <a href="#" class=""><a href="mailto:${Email}">Email: ${Email}</a>
    </div>
    </div>
    </div>
    </div>
`;

  });
return `
${addEngineer.join('')}
${addIntern.join('')}
`
}


module.exports = templateData => {
    const { employees, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<header class="top box h1 alert alert-info border border-info">My Team
</header>
<body>


<div class="crd col-sm-6">
<div class="row">
<div class="card-body">
<h5 class="card-title">Manager</h5>
<ul>
  <li>Name: ${header.ManagerName}</li>
  <li>ID Number: ${header.ManagerId}</li>
  <li>Office Number: ${header.ManagerOffice}</li>
</ul>
<a href="#" class=""><a href="mailto:${header.ManagerEmail}">Email: ${header.ManagerEmail}</a>
</div>
</div>
</div>
</div>

      ${generateCards(employees)}

</body>
</html>
  `;
};




