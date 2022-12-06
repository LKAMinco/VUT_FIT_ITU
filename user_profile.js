function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        //FIXME:
        //var active_user = JSON.parse(this.responseText).filter(function(entry){return entry.email === 'ree@email.com'});

        var users_list = JSON.parse(this.responseText);
        var active_user = users_list.filter((user) => user.email === 'ree@email.com');
        active_user = active_user[0];
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

function getName(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        //FIXME:
        var users_list = JSON.parse(this.responseText);
        var active_user = users_list.filter((user) => user.email === 'ree@email.com');
        active_user = active_user[0];
        var output = '';

        output += "<h3>" + active_user.name + " " + active_user.surname + "<h3>";
        document.getElementById('userName').innerHTML = output;
    }
    xhr.send();
}

function loadTickets() {
    var active;

    // **********************************************************
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'src/active_user.json', false);
    xhr2.onload = function () {
        var active = JSON.parse(this.responseText);
        console.log(active);
        active = "test";
    }
    // **********************************************************

    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'src/tickets.json', true);
    xhr1.onload = function () {
        document.getElementById('ticket').innerHTML = "reee";

        console.log(active);

        var ticker_list = JSON.parse(this.responseText);
        var ticker_list_filtered = ticker_list.filter((ticket) => ticket.email === active);
        var output = '';
        for (var i in ticker_list_filtered) {
            output += '<ul>' +
                '<li>Název ticketu: ' + ticker_list_filtered[i].title + '</li>' +
                '<li>Adresa: ' + ticker_list_filtered[i].address + '</li>' +
                '<li>Popis: ' + ticker_list_filtered[i].description + '</li>' +
                '<li>Categorie: ' + ticker_list_filtered[i].category + '</li>' +
                '<li>Status: ' + ticker_list_filtered[i].status + '</li>' +
                '</ul>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr1.send();
    xhr2.send();
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