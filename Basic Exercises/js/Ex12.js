console.log('Começo do hello again utilizando while')
var count = 1
while (count <= 10) {
    console.log(`Hello ${count}`)
    count++
}

console.log('\nComeço do hello again utilizando do while')
var count_do = 1
do {
    console.log(`Hello again ${count_do}`)
    count_do++
}
while (count_do <= 10)


console.log('\nComeço da Tabuada do num 9 utilizando for')
var num = 9
for (count_for = 0; count_for <= 10; count_for++) {
    result = num * count_for
    console.log(`${num} x ${count_for} = ${result}`)
}