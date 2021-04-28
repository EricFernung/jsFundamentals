//FOR IN LOOPS
/* - GREAT FOR ITERATING OVER VALUES IN AN OBJECT
    -PROPERTIES IN OBJECTS ARE WHAT'S CALLED ENUMERABLE.
    -ENUMERABLE MEANS COUNTABLE
    */

let student = {
    name: 'Jake',
    awesome: true,
    degree: "insurance",
    age: 98
}

for(item in student){
    console.log(item);
    console.log(student[item]);
}