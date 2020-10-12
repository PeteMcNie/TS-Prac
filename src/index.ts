import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'

const invOne = new Invoice('pete', 'work on webpage', 300)
const invTwo = new Invoice('sam', 'work on house', 500)


let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {  //As private cannot access here
 //   console.log(inv.client, /* inv.details, */ inv.amount, inv.format())
})

// console.log(invoices)


let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('Tiger', 'building webpage', 500)
docTwo = new Payment('Monkey', 'eating bananas', 35)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

// console.log(docs)



// INTERACTING WITH THE DOM
const form = document.querySelector('.new-item-form') as HTMLFormElement // Searching for a CLASS which can change

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// List template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let values: [string, string, number] //tuple
    values = [toFrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})


// GENERICS
const addNumber = <T extends {name: string}>(obj: T) => {
    let num = Math.floor(Math.random() * 1000)
    return {...obj, num}
}

let player = addNumber({name: 'Sergio', age: 36})

console.log(player.name)

//ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// INTERFACE
interface Resource<T> {
    uid: number
    resourceType: ResourceType
    resourceName: string
    data: T
}

const docThree: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    resourceName: 'person',
    data: { name: 'Shaun'}
}

const docFour: Resource<string[]> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    resourceName: 'reading',
    data: ['cheese', 'crackers']
}

console.log(docThree, docFour)



// TUPLES
let arr = ['Pete', 45, true]
arr[0] = false
arr[2] = 'Sam'
arr = [50, true, 'tiger']


let tup: [string, number, boolean] = ['Dan', 12, false]

let student: [string, number]
student = ['ryan', 343]




