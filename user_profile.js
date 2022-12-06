function loadUser() {
    var xhr = new XMLHttpRequest();
    document.getElementById("ree").innerHTML = "Sup";
    xhr.onload = function () {
        var user = JSON.parse(this.responseText);
        const active_user = user.filter(user.email === 'ree@email.com');

        var output = '';

        output += '<ul>' + '<b>aaaa</b>' +
            '<li>Jméno: ' + active_user.name + '</li>' +
            '<li>Email: ' + active_user.email + '</li>' +
            '<li>Přijmení: ' + active_user.surname + '</li>' +
            '<li>Adresa: ' + active_user.address + '</li>' +
            '<li>Datum narození: ' + active_user.date_of_birth + '</li>' +
            '</ul>';
        document.getElementById('user').innerHTML = output;
    }
    xhr.open('GET', 'src/users.json', true);

    xhr.send();
}

function loadTickets() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    xhr.onload = function () {
        var ticket = JSON.parse(this.responseText);

        var output = '';
        //document.getElementById('user').outerHTML = "";
        for (var i in ticket) {
            output += '<ul>' + '<b>aaaa</b>' +
                '<li>Jméno: ' + ticket[i].title + '</li>' +
                '<li>Email: ' + ticket[i].address + '</li>' +
                '<li>Přijmení: ' + ticket[i].description + '</li>' +
                '<li>Adresa: ' + ticket[i].category + '</li>' +
                '<li>Datum narození: ' + ticket[i].status + '</li>' +
                '</ul>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr.send();
    document.getElementById("ree").innerHTML = "reee";
}

function changeProfile() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    document.getElementById("ree").innerHTML = "reee";
    xhr.onload = function () {
        var ticket = JSON.parse(this.responseText);

        var output = '';
        //document.getElementById('user').outerHTML = "";
        for (var i in ticket) {
            output += '<ul>' + '<b>aaaa</b>' +
                '<li>Jméno: ' + ticket[i].title + '</li>' +
                '<li>Email: ' + ticket[i].address + '</li>' +
                '<li>Přijmení: ' + ticket[i].description + '</li>' +
                '<li>Adresa: ' + ticket[i].category + '</li>' +
                '<li>Datum narození: ' + ticket[i].status + '</li>' +
                '</ul>';
            document.getElementById('ticket').innerHTML = output;
        }
    }

    xhr.send();
}