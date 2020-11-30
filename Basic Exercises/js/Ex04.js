//exercise 004
var nome = prompt("Qual o seu nome?");
document.writeln(`<h3 style="color: white;">Olá, <strong>${nome}</strong>, seu nome tem ${nome.length} letras!</h3>`)
document.writeln(`<h3 style="color: white;">Seu nome com letras maíusculas é ${nome.toUpperCase()} !</h3>`)
document.writeln(`<h3 style="color: white;">Seu nome com letras minusculas é ${nome.toLowerCase()} !</h3>`)

