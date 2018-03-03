var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
})

var makeTable = function() {
    connection.query("SELECT * FROM product", function(err, res) {
        if (err) throw err;
        console.log("ItemID\tDepartment Name\tPrice\tNumber in Stock");
        console.log("-----------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].itemid + "\t" + res[i].productname + "\t" + res[i].departmentname + "\t" + res[i].price + "\t" + res[i].stockquantity);
        }
        console.log("-----------------------------");
    })
}
makeTable();