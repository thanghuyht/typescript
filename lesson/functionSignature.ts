//functionSignature
let sum: (a: number, b: number, c?: string) => string
//chữ ký của hàm

sum = (soA: number, soB: number, text?: string) =>
    text ? `khong sum dau nhe ${text}` : `tong la: ${soA + soB}`

console.log(sum(4, 5, 'cac'));