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

        output += '<li><h3>' + active_user.email + '</h3></li>' +
            '<li><h3>' + active_user.date_of_birth + '</h3></li>';
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

function loadUserProfile() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<div class="content">' +
            '<div id="ticket_filters">' +
            '   <div id="ticker_filter1" class="col-12 mb-3 col-md-6">' +
            '   <select class="form-select" id="filter1" onchange="searchFilter()">' +
            '   <div id="myDropdown1" class="dropdown-content">' +
            '   <option value="all" selected>Všechny staty</option>' +
            '<option value="open">Open</option>' +
            '<option value="closed">Done</option>' +
            '</div>' +
            '</select>' +
            '   </div>' +
            '  <div id="ticket_filter2" class="col-12 mb-3 col-md-6">' +
            '     <select class="form-select" id="filter2" onchange="searchFilter()">' +
            '        <div id="myDropdown2" class="dropdown-content">' +
            '           <option value="all" selected>Všechny kategorie</option>' +
            '         <option value="illegal_dumps">illegal_dumps</option>' +
            '       <option value="dirty_streets">dirty_streets</option>' +
            '        <option value="others">others</option>' +
            '      </div>' +
            '     </select>' +
            '   </div>' +
            '    <div id="ticket_filter3" class="col-12 mb-3 col-md-6">' +
            '     <select class="form-select" id="filter3" onchange="searchFilter()">' +
            '         <div id="myDropdown3" class="dropdown-content">' +
            '              <option value="max" selected>Od nejnovějších</option>' +
            '              <option value="min">Od nejstarších</option>' +
            '          </div>' +
            '        </select>' +
            '    </div>' +
            '    <div id="ticket_filter_search" class="col-12 mb-3 col-md-6">' +
            '       <li>' +
            '            <button onclick="loadTickets()" id="buttonProfileTickets">Resetovat filter</button>' +
            '       </li>' +
            '     </div>' +
            '    </div>' +
            '  </div>';
        output += '<tr class="ticket_body"> ' +
            '<div id="ticket_table">' +
            '<div class="content">' +
            '<section id="price">' +
            '<table class="main_table">' +
            '<thead>' +
            '<tr>' +
            '<th>Název</th>' +
            '<th>Datum nahlášení</th>' +
            '<th>Adresa</th>' +
            '<th>Kategorie</th' +
            '<th>Status</th>' +
            '<th>Obrázek</th>' +
            '</tr>' +
            '               </thead>' +
            '               <tbody id="ticket">' +
            '               </tbody>' +
            '           </table>' +
            '       </section>' +
            '   </div>' +
            '</div>';
        document.getElementById('loadUserPageAl').innerHTML = output;
    }
    xhr.send();
}

function loadTickets() {
    loadUserProfile();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/tickets.json', true);
    xhr.onload = function () {
        var ticker_list = JSON.parse(this.responseText);
        var ticker_list_filtered = ticker_list.filter((ticket) => ticket.user_email === 'ree@email.com');
        var output = '';
        document.getElementById('ticket').innerHTML = ticker_list_filtered;
        for (var i in ticker_list_filtered) {
            output += '<tr class="ticket_body"> ' +
                '<td>' + ticker_list_filtered[i].title + '</td>' +
                '<td>' + ticker_list_filtered[i].date + '</td>' +
                '<td>' + ticker_list_filtered[i].address + '</td>' +
                '<td>' + ticker_list_filtered[i].category + '</td>' +
                '<td>' + ticker_list_filtered[i].status + '</td>' +
                '<td><img src="' + ticker_list_filtered[i].image_path + '" class="ticket_img_small" alt="Ticket picture" onclick="getModal(this.dataset.modalTarget)" data-modal-target="#img' + i + '"></td></li>' +
                '<td>' +
                '<div class="modal_u ease" id="img' + i + '">' +
                '<div class="modal-header_u">' +
                '<img id="aaa" src="' + ticker_list_filtered[i].image_path + '">' +
                '</div>' +
                '</div>' +
                '</td>' +
                '</tr>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr.send();
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
        if (status != "all") {
            ticker_list_filtered = ticker_list_filtered.filter((ticket) => ticket.status === status);
        }
        if (category != "all") {
            ticker_list_filtered = ticker_list_filtered.filter((ticket) => ticket.category === category);
        }
        if (date == 'max') {
            ticker_list_filtered = ticker_list_filtered.sort((a, b) => a.date - b.date)
        } else {
            ticker_list_filtered = ticker_list_filtered.sort((a, b) => b.date - a.date)
        }

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
                '<td><img src="' + ticker_list_filtered[i].image_path + '" class="ticket_img_small" alt="Ticket picture" onclick="getModal(this.dataset.modalTarget)" data-modal-target="#img' + i + '"></td>' +
                '<td>' +
                '<div class="modal_u ease" id="img' + i + '">' +
                '<div class="modal-header_u">' +
                '<img src="' + ticker_list_filtered[i].image_path + '">' +
                '</div>' +
                '</div>'
                + '</td>' +
                '</tr>';
            document.getElementById('ticket').innerHTML = output;
        }
    }
    xhr.send();
}

/* **********************************DROPDOWN MENU **************************** */
/* **********************************MODAL IMG **************************** */

// all images inside the image modal content class
function popUpImage() {

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
}

/* **********************************MODAL IMG **************************** */

/* ************************EDIT PROFILE ****************************/
function editProfile() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'src/tickets.json', true);
    xhr1.onload = function () {
        var output = '';
        output +=
            '<section id="edit_profile">' +
            '<form action="save_file_edit.js">' +
            '<div class="container">' +
            '<h1 class="title c">Úprava profilu</h1>' +
            '<div class="form-group a">' +
            '<label for="first-name">Jméno</label>' + '<br>' +
            '<input id="first-name" type="text" placeholder="Moje jméno">' +
            '</div>' +
            '<div class="form-group b">' +
            '<label for="last-name">Příjmení</label>' + '<br>' +
            '<input id="last-name" type="text" placeholder="Moje příjmení">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="address">Adresa</label>' + '<br>' +
            '<input id="address" type="text" placeholder="Ulice 42, Městská část">' +
            '</div>' +
            '<div class="form-group bio">' +
            '<label for="bio">Osobní popis</label>' + '<br>' +
            '<input id="bio" type="text" placeholder="Něco málo o mně...">' +
            '</div>' +
            '<div class="checkbox_group_edit c r4">' +
            '<input id="newsletter" type="checkbox">' +
            '<label for="newsletter">Chci dostávat novinky o mých nahlášených ticketech.</label>' +
            '</div>' +
            '<div class="button_container_edit c r5">' +
            '<input type="button" id="bt" class="button" value="Uložit změny" onClick="saveProfile()"/>' +
            '</div>' +
            '</div>' +
            '<div class="container">' +
            '<h1 class="title c">Změna hesla</h1>' +
            '<div class="form-group a">' +
            '<label for="first-name">Heslo</label>' + '<br>' +
            '<input id="first-pass" type="text" placeholder="Nové heslo">' +
            '</div>' +
            '<div class="form-group b">' +
            '<label for="last-name">Kontrola hesla</label>' + '<br>' +
            '<input id="last-pass" type="text" placeholder="Nové heslo">' +
            '</div>' +
            '<div class="button_container_edit c">' +
            '<input type="button" id="bt_pass" class="button" value="Uložit nové heslo"onClick="saveProfile()"/>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '</section>';

        document.getElementById('loadUserPageAl').innerHTML = output;
    }
    xhr1.send();
}

function log_out(){
    console.log("test");
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        window.location.href = "index.html";
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=' + false);
}


