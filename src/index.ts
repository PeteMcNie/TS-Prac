// TYPES
let character = 'pablo'
let age1 = 30
let happy = true

// character = 20
character = 'sam'
// age = 'happy'
age1 = 56
// happy = 'hello'
happy = false

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(34))


//  ARRAYS
let names1 = ['pete', 'sam', 'joe']
names1.push('nigel')
//names1.push(45)
//names1[0] = 23
 
let numbers = [4, 67, 87]
//numbers.push('nigel')
numbers.push(45)
numbers[0] = 23

let mixedArray = ['pete', 34, true]
mixedArray.push('nigel')
mixedArray.push(45)
mixedArray[0] = 23

console.log(mixedArray)

// OBJECTS
let ninja = {
    name: 'pablo',
    belt: 'yellow',
    age: 45
}

ninja.name = 'steve'
ninja.age = 56
// ninja.age = '22'

// ninja.skills = ['fighting', 'kicking']
ninja = {
    name: 'Ryan',
    belt: 'blue',
    age: 30
}


// Explicit Types
let characterTwo: string
let age: number
let isLoggedIn: boolean

age = 30
//age '30'
characterTwo = 'godzilla'
//characterTwo = 55
isLoggedIn = true
//isLoggedIn = 'false'


// let ninjaArray: string[]
// ninjaArray.push('Pete')
// Won;t work as we have declared what an array will be in the future, but not initialized the array

let ninjaArray2: string[] = []
ninjaArray2.push('Pete')

let mixed: (string | number)[] = []
mixed.push('hello')
mixed.push(20)
// mixed.push(true)

console.log(mixed)

let uid: string|number
uid ='123'
uid = 123

let ninjaOne: object
ninjaOne = {
    name: 'dragon',
    age: 40,
    skills: ['flying kicks', 'hitting quick']
}

let ninjaTwo: {
    name: string,
    age: number,
    skills: string[]
}

ninjaTwo = {
    name: 'jeff',
    age: 30,
    skills: ['flying kicks', 'hitting quick']
}


// ANY TYPE //NO HELP FROM TS AS TYPE CAN BE ANY
let number: any = 25
number = true
number = 'why?'
number = { name: 'snakes'}
console.log(number)

// FUNCTIONS
let greet: Function

greet = () => {
    console.log('hello world')
}
// greet = 'hello'

const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b)
    console.log(c)
}

add(5, 36, 56)
// add(5, '36')

const minus = (a: number, b: number): number => {
    return a - b
}

let result = minus(45, 5)
// result = 'string'


// ALIASES
const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greetAgain = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`)
}

const greetAgainAgain = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`)
}

// INSTEAD OF THE ABOVE WE CAN SHORTEN WITH ALIASES
type StringOrNum = string | number
type objectWithName = { name: string, uid: StringOrNum}

const logDetails1 = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greetAgain1 = (user: {name: string, uid: StringOrNum}) => {
    console.log(`${user.name} says hello`)
}

const greetAgainAgain2 = (user: objectWithName) => {
    console.log(`${user.name} says hello`)
}


// FUNCTIONS
let grting: (a: string, b: string) => void
grting = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number, b: number, c: string) => number
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    } 
}

let logginDetails: (obj: {name: string, age: number}) => void

type person = {name: string, age: number}

logginDetails = (ninja3: person) => {
    console.log(`${ninja3.name} is ${ninja3.age}`)
}