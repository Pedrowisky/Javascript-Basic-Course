//exercise 009
var velocidade = document.getElementById('txtvel');
var result = document.getElementById('res');

function calcular() {
    vel = parseInt(velocidade.value);
    result.innerHTML = `Sua velocidade é de <strong>${vel}km/h.</strong>`;
    if (vel >= 80) {
        result.innerHTML += `<br>Você está <strong>ACIMA</strong> do limite de velocidade!`;
    }
    else {
        result.innerHTML += `<br>Você está <strong>ABAIXO</strong> do limite de velocidade!`;
    }
    result.innerHTML += `<br>Dirija sempre com o cinto de segurança!`
}