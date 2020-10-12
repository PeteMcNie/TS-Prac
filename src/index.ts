import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'

const invOne = new Invoice('pete', 'work on webpage', 300)
const invTwo = new Invoice('sam', 'work on house', 500)


let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {  //As private cannot access here
    console.log(inv.client, /* inv.details, */ inv.amount, inv.format())
})

console.log(invoices)


let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('Tiger', 'building webpage', 500)
docTwo = new Payment('Monkey', 'eating bananas', 35)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)



// INTERACTING WITH THE DOM
const form = document.querySelector('.new-item-form') as HTMLFormElement // Searching for a CLASS which can change

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
})


