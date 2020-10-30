
var userTone = prompt(`Hello`);

if (userTone === userTone.toUpperCase()) {
  console.log(`You are SHOUTING`);
} else if (userTone === userTone.toLowerCase()) {
  console.log(`You are whispering`);
} else {
  console.log(`You are niether SHOUTING or whispering`);
}