var readline = require("readline-sync");
var input = readline.question("What is your number?");
var a = 0
var b = 1
for (var i = 0; i < input; i ++){
    console.log(b)
    var sum = a + b
    a = b
    b = sum
}
