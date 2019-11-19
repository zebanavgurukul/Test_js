var readline = require("readline-sync");
var number = readline.question("What is your number?");
function prime(number){
    for (var i = 2; i < number; i ++){
        if (number % i == 0){
            return("prime number nhi hai")
    } 
    else{
        return("prime number hai")}
    }
}
console.log(prime(number))
