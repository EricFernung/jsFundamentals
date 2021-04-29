/*
let hi = () => {
//    1
    return 'hello';
}
//     2        3
let newName = hi();

console.log(newName);

/*  
    1: The keyword that brings our data out of our function
    2: We need a new variable to hold the value of the return
    3: When called, the function becomes the value of the return.

    */

    /*
-
/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/
/*
let check = (bill, tip) => {
    console.log('Bill:', bill);
    console.log('Tip:', tip);
    let tipAmount = bill * tip;
    let final = bill + tipAmount;
    return final;
}
let payment = check(250, .2);
console.log(payment);
*/
// or another possibility;

function tipCal(price) {
    let tip = price * .2;
    return tip;
}

let thisTip = tipCal(20);
console.log(thisTip);