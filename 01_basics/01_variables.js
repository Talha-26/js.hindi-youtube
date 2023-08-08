// const accountId = 14454
let accountEmail = "Talha@google.com" 
var accountPassword = "3334444"
accountCity ="Lahore"


// accountId = 2 // not allowed 

accountEmail = "Talhaa@google.com"
accountPassword ="1234"
accountCity = "Rawalpindi"
accountId = "123"
console.log(accountId);


/*
Prefer not to use Var
because of issue in blockscope and functionalscope
*/
console.table([accountEmail,accountId, accountCity, accountPassword ])
