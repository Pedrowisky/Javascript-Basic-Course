function load() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');

    var date = new Date();
    var hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    var minute =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    var weather

    if (hour >= 0 && hour < 12) {
        img.src = '../images/Exercise 01/morning.png'
        document.body.style.background = '#e2cd9f';
        weather = "Manhã"
    }
    else if (hour >= 12 && hour <= 18) {
        img.src = '../images/Exercise 01/afternoon.png'
        document.body.style.background = '#b9846f';
        weather = "Tarde"
    }
    else {
        img.src = '../images/Exercise 01/night.png'
        document.body.style.background = '#515154';
        weather = "Noite"
    }
    msg.innerHTML = `Agora são ${hour}:${minute} da ${weather}...`;
}


