// task 1 ..............................

// function numbers(num1, num2, num3, num4) {
//     const result = num1 * num2 * num3 * num4;
//     return result;
// }
// let result= numbers(1,2,3,4);
// console.log(result)

// task 2..............................

// function number(num) {
//     if (num % 2 === 0) {
//         let result = num / 2;
//         return result;
//     }
//     else {
//         const result = num * 2;
//         return result;
//     }

// }
// const odd = number(5);
// console.log(odd)

// task 3........................

function make_avg(numbers, size){
    let sum = 0;
    for(let i = 0; i<size; i++){
        sum += numbers[i];
    }
    return sum/size;
}
const nums = [2,4,6,8];
console.log(make_avg(nums,nums.length))
// console.log(avg);