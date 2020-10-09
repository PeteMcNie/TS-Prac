"use strict";
// TYPES
var character = 'pablo';
var age1 = 30;
var happy = true;
// character = 20
character = 'sam';
// age = 'happy'
age1 = 56;
// happy = 'hello'
happy = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(34));
//  ARRAYS
var names1 = ['pete', 'sam', 'joe'];
names1.push('nigel');
//names1.push(45)
//names1[0] = 23
var numbers = [4, 67, 87];
//numbers.push('nigel')
numbers.push(45);
numbers[0] = 23;
var mixedArray = ['pete', 34, true];
mixedArray.push('nigel');
mixedArray.push(45);
mixedArray[0] = 23;
console.log(mixedArray);
// OBJECTS
var ninja = {
    name: 'pablo',
    belt: 'yellow',
    age: 45
};
ninja.name = 'steve';
ninja.age = 56;
// ninja.age = '22'
// ninja.skills = ['fighting', 'kicking']
ninja = {
    name: 'Ryan',
    belt: 'blue',
    age: 30
};
// Explicit Types
var characterTwo;
var age;
var isLoggedIn;
age = 30;
//age '30'
characterTwo = 'godzilla';
//characterTwo = 55
isLoggedIn = true;
//isLoggedIn = 'false'
// let ninjaArray: string[]
// ninjaArray.push('Pete')
// Won;t work as we have declared what an array will be in the future, but not initialized the array
var ninjaArray2 = [];
ninjaArray2.push('Pete');
var mixed = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(true)
console.log(mixed);
var uid;
uid = '123';
uid = 123;
var ninjaOne;
ninjaOne = {
    name: 'dragon',
    age: 40,
    skills: ['flying kicks', 'hitting quick']
};
var ninjaTwo;
ninjaTwo = {
    name: 'jeff',
    age: 30,
    skills: ['flying kicks', 'hitting quick']
};
// ANY TYPE //NO HELP FROM TS AS TYPE CAN BE ANY
var number = 25;
number = true;
number = 'why?';
number = { name: 'snakes' };
console.log(number);
// FUNCTIONS
var greet;
greet = function () {
    console.log('hello world');
};
// greet = 'hello'
var add = function (a, b) {
    console.log(a + b);
};
add(5, 36);
