



//              1
function hi(username) {
    console.log(`Hi, ${username}.`);
    //                      2
}

//    3
hi('Summer');

/*
    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we can refer to the parameter given to the function.
    3. This is where we define what the parameter's value will be. 
    */

    /*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function hello(first, last) {
    // let first = ''
    let myName = first + ' ' + last;
    console.log(myName);
}

hello('jack', 'black');