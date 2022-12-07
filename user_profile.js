

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

function getName() {
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
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    xhr.onload = function () {
        var ticker_list = JSON.parse(this.responseText);
        var ticker_list_filtered = ticker_list.filter((ticket) => ticket.user_email === 'ree@email.com');
        var output = '';
        document.getElementById('ticket').innerHTML = ticker_list_filtered;
        console.log(ticker_list_filtered);
        for (var i in ticker_list_filtered) {
            output += '<tr>' +
                '<td>' + ticker_list_filtered[i].title + '</td>' +
                '<td>' + ticker_list_filtered[i].address + '</td>' +
                '<td>' + ticker_list_filtered[i].description + '</td>' +
                '<td>' + ticker_list_filtered[i].category + '</td>' +
                '<td>' + ticker_list_filtered[i].status + '</td>' +
                '<td><img src="' + ticker_list_filtered[i].image_path + '" class="ticket_img_small" alt="Ticket picture"></td>' +
                '</tr>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr.send();
}


function editProfile() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'src/tickets.json', true);
    xhr1.onload = function () {
        document.getElementById('ticket').innerHTML = "reee";
    }
    xhr1.send();
}

