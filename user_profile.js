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
            '<li><strong>Email: ' + active_user.email + '</strong></li>' +
            '<li><strong>Datum narození: ' + active_user.date_of_birth + '</strong></li>' +
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
        for (var i in ticker_list_filtered) {
            output += '<tr class="ticket_body"><ul><li>' +
                '<td>' + ticker_list_filtered[i].title + '</td>' +
                '<td>' + ticker_list_filtered[i].address + '</td>' +
                '<td>' + ticker_list_filtered[i].category + '</td>' +
                '<td>' + ticker_list_filtered[i].status + '</td>' +
                '<td><img src="' + ticker_list_filtered[i].image_path + '" class="ticket_img_small" alt="Ticket picture"></td></li>' +
                '<li><td class="ticket_description" colspan=5>' + ticker_list_filtered[i].description + '</td></li></ul></tr>';
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

/* **********************************DROPDOWN MENU **************************** */
var searchFilter = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    xhr.onload = function () {
        var ticker_list = JSON.parse(this.responseText);
        var ticker_list_filtered = ticker_list.filter((ticket) => ticket.user_email === 'ree@email.com');
        let status = document.getElementById("filter1").value;
        let category = document.getElementById("filter2").value;
        let date = document.getElementById("filter3").value;
        if(status != "all")
        {
            ticker_list_filtered = ticker_list_filtered.filter((ticket) => ticket.status === status);
        }
        if(category != "all")
        {
            ticker_list_filtered = ticker_list_filtered.filter((ticket) => ticket.category === category);
        }
        ticker_list_filtered = ticker_list_filtered.sort((a, b) => b.date - a.date)

        var output = '';
        document.getElementById('ticket').innerHTML = ticker_list_filtered;
        console.log(ticker_list_filtered);
        for (var i in ticker_list_filtered) {
            output += '<tr class="ticket_body">' +
                '<td>' + ticker_list_filtered[i].title + '</td>' +
                '<td>' + ticker_list_filtered[i].date + '</td>' +
                '<td>' + ticker_list_filtered[i].address + '</td>' +
                '<td>' + ticker_list_filtered[i].category + '</td>' +
                '<td>' + ticker_list_filtered[i].status + '</td>' +
                '<td><img src="' + ticker_list_filtered[i].image_path + '" class="ticket_img_small" alt="Ticket picture"></td>' +
                '</tr>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr.send();
}

/* **********************************DROPDOWN MENU **************************** */
/* **********************************MODAL IMG **************************** */
/*
// all images inside the image modal content class
const lightboxImages = document.querySelectorAll('.ticket_img_small');

// dynamically selects all elements inside modal popup
const modalElement = element =>
    document.querySelector(`.image-modal-popup ${element}`);

const body = document.querySelector('body');

// closes modal on clicking anywhere and adds overflow back
document.addEventListener('click', () => {
    body.style.overflow = 'auto';
    modalPopup.style.display = 'none';
});

const modalPopup = document.querySelector('.image-modal-popup');

// loops over each modal content img and adds click event functionality
lightboxImages.forEach(img => {
    const data = img.dataset;
    img.addEventListener('click', e => {
        body.style.overflow = 'hidden';
        e.stopPropagation();
        modalPopup.style.display = 'block';
        modalElement('h1').innerHTML = data.title;
        modalElement('p').innerHTML = data.description;
        modalElement('a').href = data.url;
        modalElement('.secondary-link').href = data.repo;
        modalElement('img').src = img.src;
    });
});
*/
/* **********************************MODAL IMG **************************** */
