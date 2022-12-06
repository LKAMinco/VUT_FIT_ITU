function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users_list.json', true);
    document.getElementById("ree").innerHTML="Sup";
    xhr.onload = function(){
        var user = JSON.parse(this.responseText);

        var output = '';

            output += '<ul>' + '<b>aaaa</b>' +
                '<li>Jméno: ' + user.name + '</li>' +
                '<li>Email: ' + user.email + '</li>' +
                '<li>Přijmení: ' + user.surname + '</li>' +
                '<li>Adresa: ' + user.address + '</li>' +
                '<li>Datum narození: ' + user.date_of_birth + '</li>' +
                '</ul>';
        document.getElementById('user').innerHTML = output;
    }

    xhr.send();
}