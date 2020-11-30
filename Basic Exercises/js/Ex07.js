//exercise 007
function somar() {
    var txtn1 = document.getElementById('txtn1');
    var txtn2 = document.getElementById('txtn2');
    var num1 = Number.parseFloat(txtn1.value);
    var num2 = Number.parseFloat(txtn2.value);
    s = num1 + num2;
    result.innerHTML = `Resultado: ${num1} + ${num2} = <strong>${s}</strong>`;
}
