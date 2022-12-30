
class Product {
    public name: string
    private id: number
    readonly price: number

    constructor(n: string, id: number, p: number) {
        this.name = n
        this.id = id
        this.price = p
    }
}

const car = new Product('Honda', 1, 9999999)
// console.log(car)
car.name = 'Yamaha'
console.log(car.name)

console.log(car.price)
//console.log(car.id) // Thuộc tính riêng tư, báo lỗi luôn, ko cho đọc ghi


//Viết gọn:
class Product2 {
    constructor(
        public name: string,
        private id: number,
        readonly price: number
    ) { }

    print(): void {
        console.log(`Name: ${this.name}, id: ${this.id}, price: ${this.price} `)
    }
}

const toy = new Product2('xxx toy', 1, 2000000)
// toy.print()

const bcs = new Product2('bcs', 1, 1000)

let produtcs: Product2[] = []
produtcs.push(bcs)
produtcs.push(toy)
produtcs.forEach(product => product.print()) 