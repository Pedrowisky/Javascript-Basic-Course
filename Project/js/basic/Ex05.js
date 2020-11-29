//exercise 005
var p = document.getElementsByTagName('p')[1]
document.write('<br>Teste de "getElementsByTagName": ' + p.innerHTML);
document.write(`<br>Teste de "getElementsByTagName": ${p.innerHTML}`);

var test = document.querySelector('span');
document.write('<br><br> Teste de "querySelector" ' + test.innerHTML);
document.write(`<br> Teste de "querySelector" ${test.innerHTML}`);

var body_color = window.document.body
body_color.style.background = 'white';
