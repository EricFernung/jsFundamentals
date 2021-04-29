let x = 12; 

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);

/*In JavaScript there are two types of scope:

        Local scope
        Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function. */

let y = 12;
function scopeTwo() {
    y = 33;
    console.log(y);
}

scopeTwo();
console.log(y);

// you get 33 33 because y = 12 but the function scopetwo overrides it. not through the first pass, because at first it ignores the 'function scopeTwo()' once it gets down to scopeTwo(); (line 27) it is called back up to the 'function scopeTwo' which then renames the y 33.