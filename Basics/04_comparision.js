// Basics
// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)


//console.log("2" > 1)    //give true convert string to int
//console.log("02" > 1)  //true

console.log(null == 0) // fasle      | == work diffirently compare then other
console.log(null > 0)  //false      | some time convert into 0 and null every time it,s diffirent
console.log(null >= 0) //true

console.log(undefined == 0) //false
console.log(undefined > 0)  //false  
console.log(undefined >= 0) //false

//So Avoide this Comparision For Clean Code


// === Stricly check ||  Check DataType
console.log("2" == 2)  //true
console.log("2" === 2) //false
