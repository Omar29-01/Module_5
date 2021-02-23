let n = prompt('Enter: ');
let m = +n;

if('number' === typeof m && !isNaN(m)) {
   if (m % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}