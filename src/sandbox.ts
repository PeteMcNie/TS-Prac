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
// Won't work as we have declared what an array will be in the future, but not initialized the array

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


// CLASSES
class Invoice {
    readonly client: string //You cannot change what this value is BUT YOU CAN ACCESS IT
    private details: string  //Can only access INSIDE class instance now as PRIVATE is declared
    public amount: number   //public is default

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    // method on the class
    format() {      
//        this.client = 'john' // Readonly, cannot change    // Can access details here as it is INSIDE the class instance
        return `${this.client} owns $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('pete', 'work on webpage', 300)
const invTwo = new Invoice('sam', 'work on house', 500)

// console.log(invOne, invTwo)

let invoices: Invoice[] = []
// invoices.push('hello')
// invoices.push({name: 'karl'})
invoices.push(invOne)
invoices.push(invTwo)
// console.log(invoices)

// invOne.client = 'john' // Readonly, cannot change

invoices.forEach(inv => {  //As private cannot access here
    console.log(inv.client, /* inv.details, */ inv.amount, inv.format())
})


// WE MIGHT NOT WANT ANOTHER DEVELOPER TO BE ABLE TO CHANGE THE VALUES IN OUR INVOICE LIKE BELOW:
// invOne.client = 'Nigel'
// invTwo.amount = 355
console.log(invoices)


// A cleaner way of defining classes
class InvoiceTwo {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {      
        return `${this.client} owns $${this.amount} for ${this.details}`
    }
}

const invThree = new InvoiceTwo('PANDA', 'Eating bamboo', 456)
const invoicesTwo: InvoiceTwo[] = []
invoicesTwo.push(invThree)
console.log(invoicesTwo)




// INTERACTING WITH THE DOM
const anchor  = document.querySelector('a')! // ! means a value WILL be returned and NOT NULL

// if (anchor) {
//     console.log(anchor.href)
// }

//console.log(anchor.href)

//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement // Searching for a CLASS which can change
//console.log(form.children)

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})


// INTERFACES
interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

const me: IsPerson = {
    name: 'Pete',
    age: 33,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent ', amount)
        return amount
    }
}

//console.log(me)

// GENERICS
const addNumber = (obj: object) => {
    let num = Math.floor(Math.random() * 1000)
    return {...obj, num}
}

let player = addNumber({name: 'Sergio', age: 36})

console.log(player)


