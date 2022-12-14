const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function getModal(modal_id) {
    const modal = document.querySelector(modal_id)
    openModal(modal)
}

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

let slideIndex = 1;

function currentDiv(n) {
    showDivs(slideIndex = n);
}

var path = window.location.pathname;
var page = path.split("/").pop();

if (page !== "report.html") {
    carousel();
}

function carousel() {
    let i;
    let x = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " white";
    setTimeout(carousel, 10000); // Change image every 2 seconds
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " white";
}

/* *************** MEDIA ******************* */
function showNavMobile(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../index.html', true);
    xhr.onload = function () {
        var output = '';
        output +=
        <div id="mobile-nav-place"></div>


        document.getElementById('desktop-nav-place').innerHTML = output;
    }
    xhr.send();
}

function showNavDesktop() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../index.html', true);
    xhr.onload = function () {
        var output = '';
        output +=
            '  <nav id="navigation-desktop">' +
            '     <div class="content">' +
            '           <ul id="bar_list">' +
            '               <li><a href="#">Hlavní stránka</a></li>' +
            '               <li><a href="index.html#about_ref">O nás</a></li>' +
            '               <li><a href="index.html#map_ref">Mapa závad</a></li>' +
            '               <li><a href="index.html#stats_ref">Štatistiky</a></li>' +
            '               <li><a href="index.html#contact_ref">Kontakty</a></li>' +
            '               <button class="hide_btn" id="logout_btn" type="submit" onClick="logout()">Odhlásit se</button>'+
        '               <button class="hide_btn" id="profile_btn" type="submit"' +
        '                       onClick="location.href=' +
        'user_profile.html'+
        '">Zobrazit' +
        '                   profil' +
        '               </button>' +
        '               <button class="hide_btn" id="register_btn" type="submit"' +
        '                       data-modal-target="#register_form">Registrovať sa' +
        '               </button>' +
        '               <button class="hide_btn" id="login_btn" type="submit" data-modal-target="#login_form">Přihlásit se'+
        '               </button>' +
        '           </ul>'+
        '       </div>'+
        '   </nav>';
        document.getElementById('desktop-nav-place').innerHTML = output;
    }
    xhr.send();

}

function resisePageMobile() {

    if (window.innerWidth <= 696) { //Detect mobile
        showNavMobile();
    } else { //Detect other higher resolution screens
        showNavDesktop();
    }

}

resisePageMobile();//run once on page load

//then attach to the event listener
window.addEventListener('resize', resisePageMobile);

/*<nav id="navigation-desktop">
    <div class="content">
        <ul id="bar_list">
            <li><a href="#">Hlavní stránka</a></li>
            <li><a href="index.html#about_ref">O nás</a></li>
            <li><a href="index.html#map_ref">Mapa závad</a></li>
            <li><a href="index.html#stats_ref">Štatistiky</a></li>
            <li><a href="index.html#contact_ref">Kontakty</a></li>
            <button class="hide_btn" id="logout_btn" type="submit" onclick="logout()">Odhlásit se</button>
            <button class="hide_btn" id="profile_btn" type="submit" onclick="location.href='user_profile.html'">Zobrazit
                profil
            </button>
            <button class="hide_btn" id="register_btn" type="submit" data-modal-target="#register_form">Registrovať sa
            </button>
            <button class="hide_btn" id="login_btn" type="submit" data-modal-target="#login_form">Přihlásit se</button>
        </ul>
    </div>
</nav>*/