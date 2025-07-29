const accountId=12334
let accountEmail="pranshu45@gmail.com"
var accountPassoword="212121"
accountCity="prayagraj"

console.log("OldAccount");

console.table([accountId,accountEmail,accountPassoword,accountCity]);

// accountId=44444 --->not allowed
/*
not use to var 
becouse of broblem to use block scope and functional scope
*/
accountEmail="ypranshu34@gmail.com"
accountPassoword="121212"
accountCity="kanpur"
console.log(accountId);
console.log("NewAccount");
console.table([accountId,accountEmail,accountPassoword,accountCity]);
