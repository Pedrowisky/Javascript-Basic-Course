//exercise 013
let num = [5, 8, 4]
console.log(`\nArray: ${num} | Array size: ${num.length}`)

num[3] = 6
//add 6 in the position 3
num.push(7)
//add 7 in the last position of the array
console.log(`\nMessy Array: ${num} | Organized Array: ${num.sort()} | Array size: ${num.length}`)
console.log(`\n1st Array Value: ${num[0]}`)

let position = num.indexOf(7)
//get the position of the element 7 if exists
if (position == -1) {
    console.log(`Not Found!`)
}
else {
    console.log(`The position of the element 7 is: ${num.indexOf(7)}`)
}

console.log(`\nArray Elements:`)
for (item = 0; item < num.length; item++) {
    console.log(num[item])
}
console.log(`\nArray Elements (simple way):`)
for (item in num) {
    console.log(`Position ${item} has the values: ${num[item]}`)
}













