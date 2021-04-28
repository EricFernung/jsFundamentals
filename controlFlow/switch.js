/*
    Switch statement execute a block of code depending on different cases.
        -often used together with a "break" or a "default" keyword (both optional)
            -break: breaks out of the switch block.
            -default: specifies some coe to run if there is no case match. 
*/

let officeCharacter = 'Dwight';

switch(officeCharacter) {
    case 'Michael':
        console.log("My mind is going a mile an hour");
        break; 
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Beets. Bears.");
        break;
    default: 
        console.log(officeCharacter);
}