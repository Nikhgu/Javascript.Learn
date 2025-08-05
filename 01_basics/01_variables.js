const accountId = 144553
let accountEmail = "ng21567@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


//accountId = 2 not allowed

accountEmail = "hchc@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

