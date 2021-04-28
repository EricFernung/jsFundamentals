let weather = 75;

if(weather < 70){
    console.log('Wear a jacket.');
} else {
    console.log('no jacket neccessary');
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let myName = 'Eric';

if (myName == 'Eric') {
    console.log(myName);
} else {
    console.log('Hello, what is your name?');
}


if (myName == 'Eric') {
    console.log('Hello, my name is ' + myName);
} else {
    console.log('Hello, is your name?' + myName + "?");
}

//ELSE IF

let newName = 'Waldo';

if(newName == "Waldo") {
    console.log('Hello ' + newName + ", welcome back.");
} else if (newName === 'Eric') {
    console.log('Hello' + newName);
} else {
    console.log("I don't know " + newName + ".");
}

