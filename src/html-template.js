function generateEmployees(employees) {
    return `
<section class="container">
    <div class="row row-cols-1 row-cols-md-3 justify-content-center g-4">
            ${employees
                    .map((employee) => {

                        let other = '';

                        switch (employee.role) {
                            case 'Manager':
                                subtitle= `<h3 class="card-subtitle p-2"><i class="fas fa-chalkboard-teacher pe-2"></i>${employee.role}</h3>`;
                                other = `<li class="list-group-item py-2">Office number: ${employee.officeNumber}</li>`;
                                break;

                            case 'Engineer':
                                subtitle= `<h3 class="card-subtitle p-2"><i class="fas fa-glasses pe-2"></i>${employee.role}</h3>`;
                                other = `<li class="list-group-item py-2">GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>`
                                break;

                            case 'Intern':
                                subtitle= `<h3 class="card-subtitle p-2"><i class="fas fa-user-graduate pe-2"></i>${employee.role}</h3>`
                                other = `<li class="list-group-item py-2">School: ${employee.school}</li>`
                                break;
                        }

                        return `
        <div class="col">
            <div class="card h-100 text-white">
                <div class="card-header bg-info py-2">
                    <h2 class="card-title p-2">${employee.name}</h2>
                    ${subtitle}
                </div>
                <div class="card-body bg-info py-5" style="--bs-bg-opacity: .5;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item py-2">ID: ${employee.id}</li>
                        <li class="list-group-item py-2">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                        ${other}
                    </ul>
                </div>
            </div>
        </div>
        `
            })
            .join('')
        }
    </div>
</section>
`
}


function generateSite(employees) {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <title>Team Generator</title>
</head>
<body>
    <header class="d-flex justify-content-center bg-danger py-5 mb-5">
        <div class="col-12"> 
            <h1 class="text-center text-white">My Team</h1>
        </div>
    </header>
    ${generateEmployees(employees)}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
    
`
}

module.exports = generateSite;