function create() {
    let txtnum = Number(document.getElementById('txtnum').value);
    let select = document.getElementById('seltab');
    if (txtnum == "") {
        alert('Campo Vazio!')
    }
    else {
        select.innerHTML = ""
        for (count = 0; count <= 10; count++) {
            let item = document.createElement('option')
            item.text = `${txtnum} X ${count} = ${txtnum * count}`
            select.appendChild(item);
        }
    }
}