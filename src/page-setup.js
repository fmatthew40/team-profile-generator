




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
    <div class="card" style="width: 20rem;">
    <div class="card-body">
      <h5 class="card-title">${role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Name}</li>
      <li class="list-group-item">ID Number: ${Id}</li>
      <li class="list-group-item">Github Address: ${Github}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Email: ${Email}</a>
    </div>
  </div>
`;
  });

  const addIntern = internCard.map(({ role, Name, Id, Email, School }) => {
    return`
    <div class="card" style="width: 20rem;">
    <div class="card-body">
      <h5 class="card-title">${role}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Name}</li>
      <li class="list-group-item">ID Number: ${Id}</li>
      <li class="list-group-item">School: ${School}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Email: ${Email}</a>
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
    <link rel="stylesheet" href="./src/stylesheet.css">
    <title>Team Profile Generator</title>
</head>
<header class=" box h1 alert alert-info border border-info">My Team
</header>
<body>

    <div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${header.ManagerName}</li>
          <li class="list-group-item">ID Number: ${header.ManagerId}</li>
          <li class="list-group-item">Office Number: ${header.ManagerOffice}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Email: ${header.ManagerEmail}</a>
        </div>
      </div>

      ${generateCards(employees)}


</body>
</html>
  `;
};