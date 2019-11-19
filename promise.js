var promise = new Promise((resolve, reject) => {
    // only 1 param allowed
return resolve("i am zeba")
})
// Parameter passed resolve would be the arguments passed into then.
promise.then(number => console.log(number)) // i am zeba

var readline = require("readline-sync");
var company = companyType => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (companyType === "i am zeba") {
                resolve("yes tell me")
            } else {
                reject('error 😢')
            }
        }, 1000)
    })
}
var promise = company(num = readline.question("What is your name?"))
    .then(cake => console.log(cake))
    .catch(nocake => console.log(nocake))
