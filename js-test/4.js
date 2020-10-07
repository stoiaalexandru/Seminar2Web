let a=[1,2,3,4]

console.log(a)

let o={
    name: 'somename',
    age: 44
}

console.log(o)
console.log(a[3])
a.push(8)
console.log(a)
a.unshift('a')
console.log(a)
console.log(a.pop())
console.log(a.shift())
console.log(a)

console.log(a.indexOf(2))
console.log(a.indexOf(20))

console.log(a.slice(1,3))
console.log(a.slice(1,a.lenght))

let b=[1,2,3,4,5,6,7,8]
console.log(b)
b.splice(1,3)
console.log(b)

b.splice(1,4,'a','b','c')

console.log(b)
