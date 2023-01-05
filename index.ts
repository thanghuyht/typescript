//Generic

type strArr = Array<string>
type numArr = Array<number>
const myArr: strArr = []
myArr.push('aaa')
myArr.push('bbb')
// console.log(myArr)

const lastArr = (arr: numArr) => console.log(arr[arr.length - 1])
// const l1 = lastArr([6, 6, 8])

// linh động hơn cho kiểu dữ liệu
const lastT = <T>(arr: Array<T>) => console.log(arr[arr.length - 1])
// <T> ánh xạ lại dang dữ liệu - linh động hơn
// const l2 = lastT([5, 6])
// const l3 = lastT(['a', 7, 'aaa'])
// const l4 = lastT(['a', 'bbb'])

const makeTupe = <X, Y>(x: X, y: Y): void => {
    //ánh xạ dạng biến truyền vào 
    console.log([x, y])
}
makeTupe(55, 'aa')
const m1 = makeTupe<number | null, string>(null, 'aa')

const makeDeafultTupeType = <A>(a: A, b: number): void => console.log([a, b])

const m2 = makeDeafultTupeType("11", 09)
//báo lỗi chề độ nghiêm ngặt ko dc viết số dạng 0x @@
