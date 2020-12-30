function parimp(n) {
    if (n % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}
let res = parimp(12)
console.log(`Par ou Ímpar? ${res}`)
//console.log(parimp(11))


function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}
let resSoma = soma(5, 5)
console.log(`Soma - ${resSoma}`)


function fatorial(num) {
    let fat = 1
    for (c = num; c > 1; c--) {
        console.log(fat *= c)
    }
    return fat
}
console.log(`Fatorial de 5: ${fatorial(5)}`)