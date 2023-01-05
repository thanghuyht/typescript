import hasPrint from "./interfaceForClass";


class Invoice implements hasPrint {
    constructor(
        readonly client: string,
        private work: string,
        public amount: number
    ) { }
    print(): void {
        console.log(`${this.client} owes ${this.amount}$ for this work: ${this.work}`)
    }
}

class Payment implements hasPrint {
    constructor(
        readonly recipients: string,
        public amt: number
    ) { }
    print(): void {
        console.log(`I owed ${this.recipients} ${this.amt}$`)
    }
}

export { Invoice, Payment }