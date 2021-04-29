//Option 1

let person1 = {
    name: 'Macy',
    age: 24, 
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15, 
    canVote: false
}

let person3 = {
    name: 'Tyler',
    age: 38,
    canVote: true
}

// 1        2           3
function Person(name, age, canVote) {
//    4    5      6
    this.name = name;
    this.age = age; 
    this.canVote = canVote; 

}
console.log(typeof Person);

//             7    8
let person4 = new Person('James', 80, true)
console.log(person4);
/*
    1-"function" is the keyword
    2-name of the Function = Person (capitalized to make it a constructor)
    3-parameters or the value of the object
    4 - "this" is the keyword. (it gives us the ability to refer back to whatever called or activates it. In this case, 'this' refers to 'Person')
    5- This is the "Key" of the new object we will create. This is NOT referring to the parameters (values).
    6- This is referring to the parameters or values.
    7- "new" is a keyword. Person is still the name of the function. The 'new' keyword is calling or invoking the a new person with the values we pass in the arguments, and storing that person in a variable. 

1

    */