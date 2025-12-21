// 1. Без использования цепочки методов

let userName = ' алЕксЕй';

userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let extraCharacter = userName.slice(1);
extraCharacter = extraCharacter.toLowerCase();

userName = letter + extraCharacter;

console.log(userName);

// 2. С использованием цепочки методов

let userNameChain = ' алЕксЕй ';

userNameChain = userNameChain.trim().charAt(0).toUpperCase() + userNameChain.trim().slice(1).toLowerCase();

console.log(userNameChain);
