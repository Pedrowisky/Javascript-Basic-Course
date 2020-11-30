function Verify() {
    var date = new Date();
    var year = date.getFullYear();
    var fyear = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fyear.value == 0 || fyear.value > year) {
        alert('Valor incorreto');
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var age = year - Number(fyear.value);
        var gender = "";
        var phase = "";
        var img = document.createElement('img');//setting img
        img.setAttribute('id', 'picture')//setting img id

        if (fsex[0].checked) {
            gender = "Homem"
            if (age >= 0 && age <= 12) {
                phase = "Criança"
                img.setAttribute('src', '../images/Exercise 02/homemcrianca.jpg')
            }
            else if (age < 18) {
                phase = "Jovem"
                img.setAttribute('src', '../images/Exercise 02/homemjovem.jpg')
            }
            else if (age < 65) {
                phase = "Adulto"
                img.setAttribute('src', '../images/Exercise 02/homemadulto.jpg')
            }
            else if (age >= 65) {
                phase = "Idoso"
                img.setAttribute('src', '../images/Exercise 02/homemidoso.jpg')
            }
        }
        else if (fsex[1].checked) {
            gender = "Mulher"
            if (age >= 0 && age <= 12) {
                phase = "Criança"
                img.setAttribute('src', '../images/Exercise 02/mulhercrianca.jpg')
            }
            else if (age < 18) {
                phase = "Jovem"
                img.setAttribute('src', '../images/Exercise 02/mulherjovem.jpg')
            }
            else if (age < 65) {
                phase = "Adulto"
                img.setAttribute('src', '../images/Exercise 02/mulheradulta.jpg')
            }
            else if (age >= 65) {
                phase = "Idoso"
                img.setAttribute('src', '../images/Exercise 02/mulheridosa.jpg')
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `${phase} ${gender} de ${age} anos`
        res.appendChild(img);//setting img to res
    }
}