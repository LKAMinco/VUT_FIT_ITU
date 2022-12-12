/*
<button id="profile_btn" type="submit" onclick="location.href='user_profile.html'">Zobrazit profil</button>
<button id="logout_btn" type="submit" onclick="location.href='index.html'">Odhlásit se</button>
<button id="register_btn" type="submit" data-modal-target="#register_form">Registrovať sa</button>
<button id="login_btn" type="submit" data-modal-target="#login_form">Přihlásit se</button>
*/

function handleForm(event) { event.preventDefault(); }

var form = document.getElementById("form_login_register");
form.addEventListener('submit', handleForm);

form = document.getElementById("form_login");
form.addEventListener('submit', handleForm);

function login(){

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        set_navbar();
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=' + true);
}

function logout(){
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        set_navbar();
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=' + false);
}

function set_navbar(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        var response = JSON.parse(this.responseText).status;
        if (response === "true"){
            var button = document.getElementById("register_btn");
            button.setAttribute("class", "hide_btn");
            button = document.getElementById("login_btn");
            button.setAttribute("class", "hide_btn");
            button = document.getElementById("profile_btn");
            button.removeAttribute("class");
            button = document.getElementById("logout_btn");
            button.removeAttribute("class");

            button = document.getElementById("submit_btn");
            button.removeAttribute("data-modal-target");
            button.setAttribute("onclick", "location.href='src/report.html'");
        }
        else{
            var button = document.getElementById("profile_btn");
            button.setAttribute("class", "hide_btn");
            button = document.getElementById("logout_btn");
            button.setAttribute("class", "hide_btn");
            button = document.getElementById("register_btn");
            button.removeAttribute("class");
            button = document.getElementById("login_btn");
            button.removeAttribute("class");

            button = document.getElementById("submit_btn");
            button.setAttribute("data-modal-target", "#login_register_form");
            button.removeAttribute("onclick");
        }
    }
    xhr.send();
}

window.onload = function() {
    set_navbar();
}