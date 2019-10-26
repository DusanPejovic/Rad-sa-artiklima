function showtable(e) {
    var ele = document.getElementById("tabela");
    if (ele.style.display == "block") {
        ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
}
function validate() {
    var text;
    if (document.form.barkod.value == "" || document.form.naziv.value == "" || document.form.cena.value == "" || document.form.kategorija.value == "") {
        alert("Morate uneti obavezne podatke!");
        document.getElementById('barkod').style.border = "2px solid red";
        document.form.barkod.focus();
        document.getElementById('naziv').style.border = "2px solid red";
        document.form.naziv.focus();
        document.getElementById('cena').style.border = "2px solid red";
        document.form.cena.focus();
        document.getElementById('kategorija').style.border = "2px solid red";
        document.form.kategorija.focus();
        return false;
    }
    return (true);
}

function cenaPdv() {
    var x = document.getElementById("cena").value;
    var y = (x / 100 * 20);
    var c = parseFloat(x) + parseFloat(y);
    document.getElementById("cenapdv").value = c;
}

function appendtable() {
    if (validate()) {
        cenaPdv();

        var table = document.getElementById("tabela_artikala");
        var row = table.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);

        cell1.innerHTML = document.getElementById("barkod").value;
        cell2.innerHTML = document.getElementById("naziv").value;
        cell3.innerHTML = document.getElementById("opis").value;
        cell4.innerHTML = document.getElementById("cena").value;
        cell5.innerHTML = document.getElementById("cenapdv").value;
        cell6.innerHTML = document.getElementById("slika").value;
        cell7.innerHTML = document.getElementById("kategorija").value;
        cell8.innerHTML = document.getElementById("datum").value;
        cell9.innerHTML = "<button id='remove' class='btn' onclick='remove()'><span>&#9747;</span></button>"
        return false;
    }
}
function pretraga() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela_artikala");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function filtriranje() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela_artikala");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[6];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function remove() {
    $('table').on('click', 'button[id="remove"]', function (e) {
        $(this).closest('tr').remove()
    })
}