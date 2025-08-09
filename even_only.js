// create a function that will return only the even numbers.
//return the sum of even numbers

function evenNum(numbers){
    // console.log(numbers)
    const evens = [];
    for(number of numbers){
        
        if(number%2 ===0 ){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [ 1, 2 ,3, 56, 76, 55];
// const result = evenNum(numbers);
// console.log('even numbers are', result)


function sumOfEven(numbers){
    let sum = 0
    for(number of numbers){
        
        if(number %2 === 0){
            console.log(number)
            sum += number;
        }
    }
    return sum
}
const sum = sumOfEven([12,13,14,15]);
console.log('sum of the even numbers is', sum)