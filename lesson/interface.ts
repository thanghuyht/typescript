interface Product {
    name: string,
    id: number,
    price: number,
    sale(pecent: number): number
}

const cartoy: Product = {
    name: 'cartoy',
    id: 1,
    price: 10000,
    sale(p: number): number { return this.price * p / 100 }
}

console.log(cartoy)

const buyProduct = (product: Product) => console.log(`ban da mua: ${product.name}`)
buyProduct(cartoy)