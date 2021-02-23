let x = 'sometext';
// let x = 46;
// let x = true;
// let x = {type:"Fiat", model:"500", color:"white"};

switch (typeof x) {
    case "string": console.log('It is a string'); break;
    case "number": console.log('It is a number'); break;
    case "boolean": console.log('It is a boolean'); break;
    default: console.log('Type is undefined');
}