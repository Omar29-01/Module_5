let str = 'Hello';

//method 1
let reversedStr = str.substr(4, 1) + str.substr(3, 1) +
    str.substr(2, 1) + str.substr(1, 1) + str.substr(0, 1);
console.log(reversedStr);

//method 2
let reversedString = str.split('').reverse().join('');
console.log(reversedString);