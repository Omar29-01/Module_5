let arr = ['a', 'a', 'a', 'a'];
// let arr = ['a', 'b', 'a', 'c'];
// let arr = [2, 2, 5, 2, 2];

let flag = false;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
        flag = true;
    } else {
        flag = false;
        break;
    }
}
console.log(flag);