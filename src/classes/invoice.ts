export class Invoice {
    readonly client: string //You cannot change what this value is BUT YOU CAN ACCESS IT
    private details: string  //Can only access INSIDE class instance now as PRIVATE is declared
    public amount: number   //public is default

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }
    format() {      
//        this.client = 'john' // Readonly, cannot change    // Can access details here as it is INSIDE the class instance
        return `${this.client} owns $${this.amount} for ${this.details}`
    }
}