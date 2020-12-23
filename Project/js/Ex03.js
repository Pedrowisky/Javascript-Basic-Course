function Verify() {
    let start = Number(document.getElementById('txtstart').value);
    let end = Number(document.getElementById('txtend').value);
    let step = Number(document.getElementById('txtstep').value);
    let res = document.getElementById('res');

    if (start == 0 || end == 0) {
        res.innerHTML = "Impossível Contar!"
    }
    else {
        res.innerHTML = `Contando...<br>`
        if (step <= 0) {
            alert("Passo = 0 ou vazio | Atribuido automaticamente o valor 1")
            step = 1
        }
        if (start < end) {
            //contagem crescente    
            for (let count = start; count <= end; count += step) {
                res.innerHTML += `${count} \u{1F449} `;
                //console.log(count)
            }
        }
        else {
            //contagem regressiva
            for (let count = start; count >= end; count -= step) {
                res.innerHTML += `${count} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
