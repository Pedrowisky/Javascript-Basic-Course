/* ex001
alert("Olá, mundo!");
confirm("Olá, denovo?");
prompt("Qual o seu nome?");
*/

/* ex002
var nome = prompt("Qual o seu nome?");
alert('É um grande prazer te conhecer: ' + nome + '!');
*/

/* ex003
var num1 = parseFloat(prompt("Digite um numero: "));
var num2 = parseFloat(prompt("Digite outro numero: "));
var soma = num1 + num2;
alert(`A soma de ${num1} + ${num2} é: ${soma}`);
*/

/*ex004
var nome = prompt("Qual o seu nome?");
document.writeln(`<h3 style="color: white;">Olá, <strong>${nome}</strong>, seu nome tem ${nome.length} letras!</h3>`)
document.writeln(`<h3 style="color: white;">Seu nome com letras maíusculas é ${nome.toUpperCase()} !</h3>`)
document.writeln(`<h3 style="color: white;">Seu nome com letras minusculas é ${nome.toLowerCase()} !</h3>`)
*/

/*ex005
var p = document.getElementsByTagName('p')[1]
document.write('teste ByTagName: ' + p.innerHTML);
document.write(`<br> teste ByTagName: ${p.innerHTML}`);

var test = document.querySelector('.teste');
document.write('<br> teste querySelector ' + test.innerHTML);
document.write(`<br> teste querySelector ${test.innerHTML}`);

var body_color = window.document.body
body_color.style.background = 'white';
*/

/*ex006
var area = document.getElementById('area');

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)


function clicar() {
    area.innerHTML = 'Clicou!';
    area.style.background = 'red';
}
function entrar() {
    area.innerHTML = 'Entrou!';
    area.style.background = 'blue';

}
function sair() {
    area.innerHTML = 'Saiu!';
    area.style.background = 'green';
}

/*ex007
function somar() {

    var txtn1 = document.getElementById('txtn1');
    var txtn2 = document.getElementById('txtn2');
    var num1 = Number.parseFloat(txtn1.value);
    var num2 = Number.parseFloat(txtn2.value);
    s = num1 + num2;
    result.innerHTML = `Resultado: ${num1} + ${num2} = <strong>${s}</strong>`;
}
*/

/*ex008
var speed = 40;

if (speed < 50) {
    console.log(`Você esta abaixo do limite de velocidade!`)
}
else {
    console.log(`Sua velocidade é de ${speed}km/h. Você esta acima do limite de velocidade!`)
}
*/

/*ex009
var velocidade = document.getElementById('txtvel');
var result = document.getElementById('res');

function calcular() {
    vel = parseInt(velocidade.value);
    result.innerHTML = `Sua velocidade é de <strong>${vel}km/h.</strong>`;
    if (vel >= 80) {
        result.innerHTML += `<br>Vc está <strong>ACIMA</strong> do limite de velocidade!`;
    }
    else {
        result.innerHTML += `<br>Vc está <strong>ABAIXO</strong> do limite de velocidade!`;
    }
    result.innerHTML += `<br>Dirija sempre com o cinto de segurança!`
}
*/

/*ex 010
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

var agora = new Date()
var diaSemana = agora.getDay()

0 = Domin
1 = Segunda
2 = Terça
3 = Quar
4 = Quin
5 = Sex
6 = Sab

console.log(diaSemana)

switch (diaSemana) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sabádo")
        break;

    default:
        console.log("Dia nenhum!")
}
*/
