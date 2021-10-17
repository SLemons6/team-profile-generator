const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generateSite = require('../src/html-template');

class Team {
    constructor() {
        this.members = [];
    }


    createSite() {
        this.managerPrompt().then((manager) => {
            this.members.push(manager);
            this.addTeamMemberPrompt();
        });

    }

    employeePrompt(role) {

        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the ' + role + '\'s name?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'Please assign an ID number for the ' + role + '.'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the email address of the ' + role + '.'
                }
            ])
            .then(({ name, id, email }) => {
                return new Employee(name, id, email);
            });
    }

    managerPrompt() {
        return this.employeePrompt("Manager").then((employee) => {
            return inquirer
                .prompt(
                    {
                        type: 'number',
                        name: 'officeNumber',
                        message: 'Please enter the office number of your manager.'
                    }
                )
                .then(({ officeNumber }) => {
                    return new Manager(employee.name, employee.id, employee.email, officeNumber);
                })
        });
    }

    engineerPrompt() {
        return this.employeePrompt("Engineer").then((employee) => {
            return inquirer
                .prompt(
                    {
                        type: 'input',
                        name: 'github',
                        message: 'Please enter the GitHub profile of the engineer you want to add.'
                    }
                )
                .then(({ github }) => {
                    return new Engineer(employee.name, employee.id, employee.email, github);
                })
        });
    }

    internPrompt() {
        return this.employeePrompt("Intern").then((employee) => {
            return inquirer
                .prompt(
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter the school the intern attended.'
                    }
                )
                .then(({ school }) => {
                    return new Intern(employee.name, employee.id, employee.email, school);
                })
        });
    }

    finishTeam() {
        const html = generateSite(this.members);
        fs.writeFile('./dist/index.html', html, (err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log('File created!');


        }
        )
    }

    addTeamMemberPrompt() {
        inquirer
            .prompt(
                {
                    type: 'list',
                    name: 'action',
                    message: 'What would you like to do?',
                    choices: [
                        'Add an engineer',
                        'Add an intern',
                        'Finish building team'
                    ]
                }
            )
            .then(({ action }) => {
                switch (action) {
                    case 'Add an engineer':
                        this.engineerPrompt().then((engineer) => {
                            this.members.push(engineer);
                            this.addTeamMemberPrompt();
                        });
                        break;

                    case 'Add an intern':
                        this.internPrompt().then((intern) => {
                            this.members.push(intern);
                            this.addTeamMemberPrompt();
                        });
                        break;

                    default:
                        this.finishTeam();

                }
            })
    }
}

module.exports = Team;