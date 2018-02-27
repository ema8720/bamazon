var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "besamemucho",
    database: "bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connection successful!");
    makeTable();
})

var makeTable = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].itemid + " || " + res[i].productname + " ||" + res[i].departmentname + "|| " + res[i].price + "||" + res[i].stockquantity + "\n ");
        }
    })
}

var promptCustomer = function(res) {
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: 'What would you like purchase? [Quite with Q]'
    }]).then(function(answer) {
        var correct = false;
        for (var i = 0; i < res.length; i++) {
            if (res[i].productname == answer.choice) {
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    type
                })
            }
        }
    })
}