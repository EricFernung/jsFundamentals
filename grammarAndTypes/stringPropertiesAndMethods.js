// STRING PROPERTIES
// *properties associated with a datatype
// -strings have only one property and that is the length property.
// - use a "." to activate

let myName = "Supercalafragilisticexpyalladoscious";
console.log(myName.length);

// STRING METHODS
// *tools we can use to manipulate our data. 
// use .method() .property
// methods are functions associated with datatypes

console.log(myName.toUpperCase());
//.topUpperCase() will capitalize all letters

let home = 'My home is Indiana';
console.log(home.includes('Indiana'));
//.indules() will check if a certain string is included in another string

let sent = 'This sentence will be split into individual pieces';
console.log(sent.split(' '));