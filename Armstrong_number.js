var readline = require("readline-sync");
var num = readline.question("What is your number?");
function Armstrong(num){
    var sum = 0
    var i = 0
    var i = num
    while (i > 0){
        var var_1 = i % 10
        sum += (var_1 **3 )
        i = parseInt(i / 10);
    }
    if (num == sum){
        return("Armstrong number hai")
    }
    else{
        return("Armstrong number nhi hai")
    }
}
console.log(Armstrong(num))
