function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        //FIXME:
        var active_user = JSON.parse(this.responseText).filter(function(entry){return entry.name === 'ree@email.com'});
        var output = '';

        output += '<ul>' +
            '<li>Jméno: ' + active_user.name + '</li>' +
            '<li>Email: ' + active_user.email + '</li>' +
            '<li>Přijmení: ' + active_user.surname + '</li>' +
            '<li>Adresa: ' + active_user.address + '</li>' +
            '<li>Datum narození: ' + active_user.date_of_birth + '</li>' +
            '</ul>';
        document.getElementById('user').innerHTML = output;
    }

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
            output += '<ul>' +
                '<li>Název ticketu: ' + ticket[i].title + '</li>' +
                '<li>Adresa: ' + ticket[i].address + '</li>' +
                '<li>Popis: ' + ticket[i].description + '</li>' +
                '<li>Categorie: ' + ticket[i].category + '</li>' +
                '<li>Status: ' + ticket[i].status + '</li>' +
                '</ul>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr.send();
}

function editProfile() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    document.getElementById("ree").innerHTML = "reee";
    xhr.onload = function () {
        var ticket = JSON.parse(this.responseText);

        var output = '';
        //document.getElementById('user').outerHTML = "";
        for (var i in ticket) {
            output += '<ul>' +
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