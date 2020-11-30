//exercise 010
var hour = new Date()
var hora_atual = hour.getHours()

if (hora_atual < 12) {
    console.log(`São exatamente ${hora_atual}H. Bom dia!`)
}
else if (hora_atual <= 18) {
    console.log(`São exatamente ${hora_atual}H. Boa Tarde!`)
}
else if (hora_atual <= 23) {
    console.log(`São exatamente ${hora_atual}H. Boa Noite!`)
}