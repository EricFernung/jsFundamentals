/* 
LOOPS
-offer us a quick and easy way to do something repeatedly, or loop over something

-A loop has 3 parts
    -Initial expression
    -Condition
    -Increment Expression

*/

//set i to 0
//while i is less than 10
//i++ (Add 1)
/*
//count from 0-10 in increments of 1
for (let i = 0; i < 10; i++){
    console.log(i);
}

//count from 0-20 in increments of 2
for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

//count from 10-0 in increments of 1
for(let i = 10; i>=0; i -= 1){
    console.log(i);
}

//count from 0- -24 in increments of 2s
for(let i = 0; i >= -24; i -= 2){
    console.log(i);
}

//go through a name and display each letter individually

let myname = "Eric";

for(let i=0; i < myname.length; i++){
    console.log(myname[i]);
}
*/

//Make a loop where you add up all numbers from 1 to 50

let sum=0;

for(let i = 0; i <= 50; i++){
    sum += i; 
   
} 
console.log(sum);