const questions = {
  menu: {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "You need to select an option to continue! ";
      }
    },
  },
  addRole(currentDepartments){
    return [
        {
            type: "input",
            message: "What is the title of the role",
            name: "title"
        },
        {
            type: "input",
            message: "What is the salary of the role",
            name: "salary"
        },
        {
            type: "list",
            message: "What is the department of the role",
            name: "department_id",
            choices: currentDepartments
        },
    ]
  }
};

module.exports = questions