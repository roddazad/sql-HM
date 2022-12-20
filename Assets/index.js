const mysql = require("mysql2");
const inquirer = require("inquirer");
const questions = require("./questions");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "departments_db",
  },
  console.log(`Connected to the departments_db database.`)
);

const promptUser = (questionSet) => {
  return inquirer.prompt(questionSet);
};

const addRole = async () => {
    
    db.query("select dept_name as name, id as value from department", async function (err, results) {
        console.log(results);
        var data = await promptUser(questions.addRole(results))
        console.log(data)
        
        if(err){
            console.log(err)
        }
      });
};
const viewEmployees = async () =>{
  db.query("SELECT first_name, last_name FROM employee", function (err, results, fields) {
    console.log(results);
  });
};

async function init() {
  var data = await promptUser(questions.menu);
  // console.log(data);
  switch (data.action) {
    case "View all departments":
      console.log("Id Name");
      console.log("-- ---------- ");
      console.log("02 Engineering");
      console.log("03 Finance");
      console.log("04 Legal");
      console.log("01 Sales");
      break;
    case "Add a role":
      addRole();
      break;
    case "View all employees":
      viewEmployees();
        break;
        default:
  }
}
init();
