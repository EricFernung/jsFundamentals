/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - print out the number if neither.
        * "print = console.log"
        ->100
*/



let FizzB;

for(let i = 1; i < 100; i++) {
    FizzB = i;

    if(FizzB % 3 === 0 && FizzB % 5 === 0) {
        console.log('Fizz Buzz');
    } else if(FizzB % 5 === 0) {
        console.log('Buzz');
    } else if (FizzB % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(FizzB);
    }
}