import { Invoice, Payment } from "./classImplementsInterface"
import hasPrint from "./interfaceForClass"

const docOne: hasPrint = new Invoice('alibaba', 'CEO', 10000)
const docTwo: hasPrint = new Payment('Boss', 5000)

const docArr: hasPrint[] = []
docArr.push(docOne)
docArr.push(docTwo)

// console.log(docArr);
docOne.print()
docTwo.print()

//place on home