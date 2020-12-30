let txtnum = document.querySelector('input#txtnum');
let selnum = document.querySelector('select#selnum');
let res = document.querySelector('div#res');
let array = [];

function isNumber(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true;
    } else {
        return false;
    }
}

function isRepeated(num, list) {
    if (list.indexOf(Number(num)) != -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if (!isNumber(txtnum.value) || isRepeated(txtnum.value, array)) {
        alert("Valor inválido ou repetido!")
    }
    else {
        array.push(Number(txtnum.value));
        console.log(array);

        let item = document.createElement('option')
        item.text = `Valor adicionado: ${txtnum.value}`
        selnum.appendChild(item);
        res.innerHTML = ""
    }
    txtnum.value = ""
    txtnum.focus();
}

function finished() {
    if (array.length == 0) {
        alert("Adicione algum valor!")
    } else {
        let tot = array.length;
        let maior = array[0];
        let menor = array[0];
        let soma = 0

        for (index in array) {

            soma += array[index]

            if (array[index] > maior) {
                maior = array[index];
            }
            if (array[index] < menor) {
                menor = array[index];
            }
        }

        let media = soma / tot;

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>Menor valor: ${menor}</p>`
        res.innerHTML += `<p>Maior valor: ${maior}</p>`
        res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>Média dos valores: ${media}</p>`
    }
}

