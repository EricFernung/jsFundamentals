// shortcut for writing if/else & else/if statements

let num = "Waldo";

if (num > 0) {
    console.log("Yes");
} else {
    console.log("no");
}

//IF                if true        ELSE        if false
num > 0 ? console.log('Yes it is!') : console.log('It is not');

num > 10 ? console.log('larger than ten') : 
num < 5 ? console.log('less than 5') : 
num < 10 ? console.log('less than 10') : 
console.log(`${num} is NaN`); //NaN = not a number

// num + " is NaN"

