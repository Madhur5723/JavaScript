const accountId=133;
let accountEmail="madhur@";
var accountPassword="123";
accountCity="pune";
let accountState;
// accountId=2; not allowed

accountEmail="newmail";
accountPassword="2222";
accountCity="rrr";

/*prefer not to use var because pf issue in block scope  and functionl scope
 */
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])