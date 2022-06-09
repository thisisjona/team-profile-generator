const inquirer = require('inquirer');

const promptUser = () => {
    console.log("Welcome to your Team Profile Generator!");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "(Required) Enter the team manager's name:",
            validate: (nameInput) => {
                if (nameInput && !Number(nameInput)) {
                    return true;
                } else {
                    console.log(`Please enter a valid name for this role`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "(Required) Please enter the team manager's employee ID:",
            validate: (idInput) => {
                if (Number(idInput)) {
                    return true;
                } else {
                    console.log(`You must enter a valid employee ID`);
                    return false;
                }
            }
        }
    ])
}




promptUser();
