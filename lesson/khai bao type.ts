type StringOrNumber = string | number //tao kieu type truoc
type Students = { name: string, id: StringOrNumber } // chua hieu lam cho nay la Obj hay gi

const studentUser = (user: Students) => console.log(`Hoc sinh  ten: ${user.name} co id: ${user.id}`)
studentUser({ name: "thang", id: 9 })


const nam = { name: 'nam', id: 3 }
studentUser(nam)

