// TODO: Create a function to generate markdown for README
function generate(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>My Team</title>
</head>
<body>
  <header class="box h1 alert alert-info border border-info">
    <div class="title-area text-center">My Team</div>
  </header>




  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text"> ${data.managerName} </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID Number: ${data.managerId}</li>
    <li class="list-group-item">Office Number: ${ data.managerEmail}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">${data.managerOffice}</a>
  </div>
</div>



</body>
</html>





`;
}



module.exports = generate;