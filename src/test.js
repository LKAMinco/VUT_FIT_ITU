function endOfReport(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="last_report_page">'+
            '<div class="content">'+
            '<h2>Děkujeme za nahlášení problému</h2>'+
            '</div>'+
            ' <div id="back">\n' +
            '     <button id="back_to_main_page">Zpět na hlavní stránku</button>\n' +
            ' </div>' +
            '</section>';
        document.getElementById('report_part').innerHTML = output;
        document.getElementById("back_to_main_page").onclick = function () {
            location.href = "./index.html";
        }
    }
    xhr.send();
}

function reportThree() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="contact">'+
            '<div class="content">'+
                '<h2>Contact</h2>'+
                '<div id="map"></div>'+
                '<form action="#">'+
                    '<input id="contact-subject" type="text" name="subject" placeholder="Subject" required>'+
                    '<textarea id="contact-message" name="message" cols="30" rows="10" placeholder="Message" required></textarea>'+
                    '<input onclick="endOfReport()" id="contact-submit" type="submit" value="Submit">'+
                '</form>'+
            '</div>'+
            '</section>' +
            '<section>' +
            ' <div id="ticket_filter_search" class="col-12 mb-3 col-md-6">\n' +
            '   <li>\n' +
            '     <button onclick="reportSecond()" id="buttonProfileTickets">Vrátit se zpět</button>\n' +
            '   </li>\n' +
            ' </div>' +
            '</section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}

function reportSecond() {
//    var image = document.getElementById('photo_mode').innerHTML;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="services">\n' +
            '        <div class="content">\n' +
            '            <h3>2/5 Nahrajte fotografii:</h3>\n' +
            '        </div>\n' +
            '<div id="aa">' +
            '<input id="photo_mode" type="file" name="uploadfile" accept="image/png, image/gif, image/jpeg">'+
            '</div>' +
            ' <div id="ticket_filter_search" class="col-12 mb-3 col-md-6">\n<ul>' +
            '   <li>\n' +
            '     <button onclick="reportThree()" id="buttonProfileTickets">Pokračovat dále</button>\n' +
            '   </li>\n' +
            '   <li>\n' +
            '     <button onclick="reportFirst()" id="buttonProfileTickets">Vrátit se zpět</button>\n' +
            '   </li>\n' +
            ' </ul></div>' +
            '</section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}

function reportFirst() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="services">\n' +
            '        <div class="content">\n' +
            '            <h3>1/5 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div class="services-column">\n' +
            '                    <div onclick="roads()" class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/roads.svg" alt=".">\n' +
            '                            <img src="pictures/roads.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Problémy na silnicích</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/bench.svg" alt=".">\n' +
            '                            <img src="pictures/bench.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Lavičky</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/dump.svg" alt=".">\n' +
            '                            <img src="pictures/dump.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Ilegální skládky</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="parks()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/park.svg" alt=".">\n' +
            '                            <img src="pictures/park.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Parky a zeleň</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/car.svg" alt=".">\n' +
            '                            <img src="pictures/car.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Opuštěná vozidla</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/playground.svg" alt=".">\n' +
            '                            <img src="pictures/playground.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Dětská hřiště</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/vandalism.svg" alt=".">\n' +
            '                            <img src="pictures/vandalism.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Vandalismus</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/others.svg" alt=".">\n' +
            '                            <img src="pictures/others.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Ostatní</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '         </section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}

function parks() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        var output = '';

        output += '<section id="services" class="only_four">\n' +
            '        <div class="content">\n' +
            '            <h3>1/5 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/park_pic/flower.svg" alt=".">\n' +
            '                            <img src="pictures/park_pic/flower.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Vysazování květin</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/park_pic/forest.svg" alt=".">\n' +
            '                            <img src="pictures/park_pic/forest.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Sázení nových stromů</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/park_pic/grass.svg" alt=".">\n' +
            '                            <img src="pictures/park_pic/grass.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Luční trávy</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/park_pic/people_in_park.svg" alt=".">\n' +
            '                            <img src="pictures/park_pic/people_in_park.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Nelegální kempování</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '<div id="ticket_filter_search" class="col-12 mb-3 col-md-6">\n' +
            '                    <li>\n' +
            '                        <button onclick="reportFirst()" id="buttonProfileTickets">Vrátit se zpět</button>\n' +
            '                    </li>\n' +
            '                </div>' +
            '         </section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}

function roads() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        var output = '';

        output += '<section id="services" class="only_four">\n' +
            '        <div class="content">\n' +
            '            <h3>1/5 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/car_pic/edit_road.svg" alt=".">\n' +
            '                            <img src="pictures/car_pic/edit_road.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Silnice optřebuje opravu</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/car_pic/sign-stop-lights.svg" alt=".">\n' +
            '                            <img src="pictures/car_pic/sign-stop-lights.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Nefunkční semafor</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/car_pic/sign-stop.svg" alt=".">\n' +
            '                            <img src="pictures/car_pic/sign-stop.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Dopravní značení</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/car_pic/other.svg" alt=".">\n' +
            '                            <img src="pictures/car_pic/other.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>ostatní</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '<div id="ticket_filter_search" class="col-12 mb-3 col-md-6">\n' +
            '                    <li>\n' +
            '                        <button onclick="reportFirst()" id="buttonProfileTickets">Vrátit se zpět</button>\n' +
            '                    </li>\n' +
            '                </div>' +
            '         </section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}


