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
        console.log(ticker_list_filtered);
        for (var i in ticker_list_filtered) {
            output += '<tr>' +
                '<td>' + ticker_list_filtered[i].title + '</td>' +
                '<td>' + ticker_list_filtered[i].address + '</td>' +
                '<td>' + ticker_list_filtered[i].description + '</td>' +
                '<td>' + ticker_list_filtered[i].category + '</td>' +
                '<td>' + ticker_list_filtered[i].status + '</td>' +
                '<div class="ticket_img_content"><td><img src="' + ticker_list_filtered[i].image_path + '" class="ticket_img_small" alt="Ticket picture"></td></div>' +
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

/* **********************************DROPDOWN MENU **************************** */
var searchFilter = () => {
    let selectedColor = document.getElementById("filterByColor").value;
    const input = document.querySelector(".form-control");
    let textBox = input.value;
    const cards = document.getElementsByClassName("col");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");
        if ((cards[i].classList.contains(selectedColor) || selectedColor == "") && title.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1) {
            cards[i].classList.remove("d-none");
        } else {
            cards[i].classList.add("d-none");
        }
    }
}
/* **********************************DROPDOWN MENU **************************** */
/* **********************************MODAL IMG **************************** */
// all images inside the image modal content class
const lightboxImages = document.querySelectorAll('.ticket_img_content img');

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

/* **********************************MODAL IMG **************************** */
