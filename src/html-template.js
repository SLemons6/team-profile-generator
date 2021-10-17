function generateEmployees(employees) {
    return `
<section>
    ${employees
            .map((employee) => {

                let other = '';

                switch (employee.role) {
                    case 'Manager':
                        other = `<p>Office number: ${employee.officeNumber}</p>`;
                        break;

                    case 'Engineer':
                        other = `
                        <p>GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
                        `
                        break;

                    case 'Intern':
                        other = `<p>School: ${employee.school}</p>`
                        break;
                }

                return `
        <div>
        <h2>${employee.name}</h2>
        <h3>${employee.role}</h3>
        <p>ID: ${employee.id}</p>
        <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
        ${other}
        </div>
        `
            })
            .join('')
        }
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
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    ${generateEmployees(employees)}
</body>
</html>
    
`
}

module.exports = generateSite;