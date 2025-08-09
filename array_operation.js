// objective: write a function to give me the sum of all numbers in an arry
//step-1 : declare a function
//step-2: call check whether the function is called properly
//step-3: set a parameter

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number)
        sum += number;
       
    }
    return sum;

}
const nums =[1, 2, 3, 4, 5]
const sum = sumOfNumbers(nums);
console.log('sum of numbers is' , sum );