import { Invoice } from './classes/invoice.js'

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


