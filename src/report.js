function endOfReport() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="last_report_page">' +
            '<div class="content">' +
            '<h3>Děkujeme za nahlášení problému</h3>' +
            '<h3>Problém jsme si převzali na kontrolu ověření jeho pravdivost.</h3>' +
            '<h3>O další změně stavu Vás nadále budeme informovat.</h3>' +
            ' <div id="back">\n' +
            '     <button id="buttonProfileTickets" onClick="location.href=\'index.html\'">Zpět na hlavní stránku</button><br>\n' +
            '     <button id="buttonProfileTickets" onClick="location.href=\'user_profile.html\'">Sledovat stav mých hlášení</button>\n' +
            '</div>' +
            ' </div>' +
            '</section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}

function reportFour() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="services">' +
            '<div class="content">' +
            '<h3>4/4 Doplňte další informace:</h3>' +
            '<form action="#" id="form_4">' +
            '<input id="4_input" type="text" name="subject" placeholder="Subject" required>' +
            '<textarea id="4_textarea" name="message" cols="30" rows="10" placeholder="Message" required></textarea>' +
            '<input onclick="endOfReport()" class="submit-btn" id="submit-btn" type="submit" value="Pokračovat dále">' +
            '</form>' +
            '</div>' +
            ' <div id="ticket_filter_search" class="col-12 mb-3 col-md-6">\n' +
            '   <li>\n' +
            '     <button onclick="reportThree()" id="buttonProfileTickets">Vrátit se zpět</button>\n' +
            '   </li>\n' +
            ' </div>' +
            '</section>';
        document.getElementById('report_part').innerHTML = output;
    }
    xhr.send();
}

function reportThree() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="services">' +
            '<div class="content">' +
            '<h3>3/4 Vyberte lokaci problému:</h3>' +
            '<form id="report_form" action="#">' +
            '<div id="map_div"></div>' +
            '<input onclick="reportFour()" class="submit-btn" id="three-submit" type="submit" value="Pokračovat dále">' +
            '</form>' +
            '</div>' +
            ' <div id="ticket_filter_search" class="col-12 mb-3 col-md-6">\n' +
            '   <li>\n' +
            '     <button onclick="reportSecond()" id="buttonProfileTickets">Vrátit se zpět</button>\n' +
            '   </li>\n' +
            ' </div>' +
            '</section>';
        document.getElementById('report_part').innerHTML = output;
        createMap();

        var form = document.getElementById("report_form");
        form.addEventListener('submit', handleForm);
    }
    xhr.send();
}

function handleForm(event) {
    event.preventDefault();
}

function loadFile(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
}


function reportSecond() {
//    var image = document.getElementById('photo_mode').innerHTML;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="services">\n' +
            '        <div class="content">\n' +
            '            <h3>2/4 Nahrajte fotografii:</h3>\n' +
            '        </div>\n' +
            '<div id="aa">' +
            '<img id="output"/><br>' +
            '<label class="custom-file-upload"><input id="photo_mode" type="file" name="uploadfile" accept="image/png, image/gif, image/jpeg" onchange="loadFile(event)"/>Upload file</label>' +
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
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';
        output += '<section id="services">\n' +
            '        <div class="content">\n' +
            '            <h3>1/4 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div class="services-card">\n' +
            '                    <div onclick="roads()" class="services-column">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/roads.svg" alt=".">\n' +
            '                            <img src="src/pictures/roads.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Problémy na cestách</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/bench.svg" alt=".">\n' +
            '                            <img src="src/pictures/bench.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Lavičky</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/dump.svg" alt=".">\n' +
            '                            <img src="src/pictures/dump.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Nelegálne skládky</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="parks()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/park.svg" alt=".">\n' +
            '                            <img src="src/pictures/park.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Parky a zeleň</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/car.svg" alt=".">\n' +
            '                            <img src="src/pictures/car.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Opustené vozidlá</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/playground.svg" alt=".">\n' +
            '                            <img src="src/pictures/playground.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Detské ihriská</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/vandalism.svg" alt=".">\n' +
            '                            <img src="src/pictures/vandalism.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Vandalizmus</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/others.svg" alt=".">\n' +
            '                            <img src="src/pictures/others.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Ostatné</h4>\n' +
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
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';

        output += '<section id="services" class="only_four">\n' +
            '        <div class="content">\n' +
            '            <h3>1/4 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/park_pic/flower.svg" alt=".">\n' +
            '                            <img src="src/pictures/park_pic/flower.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Vysádzanie kvetín</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/park_pic/forest.svg" alt=".">\n' +
            '                            <img src="src/pictures/park_pic/forest.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Sadenie nových stromov</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/park_pic/grass.svg" alt=".">\n' +
            '                            <img src="src/pictures/park_pic/grass.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Lúčne trávy</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/park_pic/people_in_park.svg" alt=".">\n' +
            '                            <img src="src/pictures/park_pic/people_in_park.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Nelegálne kempovanie</h4>\n' +
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
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';

        output += '<section id="services" class="only_four">\n' +
            '        <div class="content">\n' +
            '            <h3>1/4 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/car_pic/edit_road.svg" alt=".">\n' +
            '                            <img src="src/pictures/car_pic/edit_road.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Oprava ciest</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/car_pic/sign-stop-lights.svg" alt=".">\n' +
            '                            <img src="src/pictures/car_pic/sign-stop-lights.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Nefunkčný semafor</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/car_pic/sign-stop.svg" alt=".">\n' +
            '                            <img src="src/pictures/car_pic/sign-stop.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Dopravné značenie</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div onclick="reportSecond()" class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="src/pictures/car_pic/other.svg" alt=".">\n' +
            '                            <img src="src/pictures/car_pic/other.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Ostatné</h4>\n' +
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

function createMap() {
    const mapKey = "pk.eyJ1IjoianVsaXVzangiLCJhIjoiY2xiY2hoZWpvMDRkMTNxb2VsYWQ3ZW1vdSJ9.Qu7Yj2WOBF-uLm2S8x5yaQ";
    var map = L.map('map_div').setView([49.194825, 16.608241], 15);

    var bound1 = L.latLng(49.416606, 16.220931);
    var bound2 = L.latLng(48.918164, 17.048815);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 11,
        accessToken: mapKey,
        attribution: "<a>© Goal Diggers 2022<\a>"
    }).addTo(map);

    map.setMaxBounds(L.latLngBounds(bound1, bound2));

    const brnoBounds = L.polygon([[
        [90, -180],
        [90, 180],
        [-90, 180],
        [-90, -180]
    ],
        [
            [49.216628, 16.428957],
            [49.193636, 16.456938],
            [49.192738, 16.474104],
            [49.198347, 16.472044],
            [49.198796, 16.481657],
            [49.191617, 16.494704],
            [49.184885, 16.495390],
            [49.176581, 16.517706],
            [49.170970, 16.518393],
            [49.164685, 16.529379],
            [49.168276, 16.537962],
            [49.164460, 16.553068],
            [49.164460, 16.553068],
            [49.156378, 16.577101],
            [49.160696, 16.576756],
            [49.158658, 16.593786],
            [49.135751, 16.589184],
            [49.134975, 16.598468],
            [49.138370, 16.605543],
            [49.145933, 16.634426],
            [49.144913, 16.640437],
            [49.131732, 16.639658],
            [49.131587, 16.633647],
            [49.124449, 16.633536],
            [49.124594, 16.626857],
            [49.110122, 16.626444],
            [49.110151, 16.634543],
            [49.118311, 16.633541],
            [49.114523, 16.674169],
            [49.118821, 16.684075],
            [49.128655, 16.697432],
            [49.127490, 16.705335],
            [49.145696, 16.712682],
            [49.145040, 16.703443],
            [49.163822, 16.696097],
            [49.172192, 16.705113],
            [49.176704, 16.693871],
            [49.185580, 16.694204],
            [49.193437, 16.721586],
            [49.226814, 16.715464],
            [49.237826, 16.727883],
            [49.244949, 16.724532],
            [49.243713, 16.712844],
            [49.218315, 16.681573],
            [49.225280, 16.664921],
            [49.233410, 16.673378],
            [49.238761, 16.665571],
            [49.247165, 16.641059],
            [49.251659, 16.643570],
            [49.250807, 16.647793],
            [49.268225, 16.636516],
            [49.268737, 16.628157],
            [49.274901, 16.623629],
            [49.274475, 16.619666],
            [49.278225, 16.617925],
            [49.278480, 16.621234],
            [49.282996, 16.624412],
            [49.281519, 16.633643],
            [49.286546, 16.648446],
            [49.294441, 16.630072],
            [49.286262, 16.626110],
            [49.285467, 16.629332],
            [49.285751, 16.622627],
            [49.291545, 16.616836],
            [49.289074, 16.605255],
            [49.292624, 16.598637],
            [49.285382, 16.594979],
            [49.285893, 16.590495],
            [49.282996, 16.588057],
            [49.282959, 16.578874],
            [49.277152, 16.580561],
            [49.277411, 16.576326],
            [49.275490, 16.574605],
            [49.274297, 16.577689],
            [49.270655, 16.574990],
            [49.270077, 16.569557],
            [49.268173, 16.561021],
            [49.266082, 16.563294],
            [49.265384, 16.562157],
            [49.265933, 16.558315],
            [49.265177, 16.558293],
            [49.266052, 16.553473],
            [49.265859, 16.553155],
            [49.265518, 16.554883],
            [49.264153, 16.556474],
            [49.263352, 16.561248],
            [49.260889, 16.561816],
            [49.261186, 16.560430],
            [49.259836, 16.558816],
            [49.259020, 16.560157],
            [49.258797, 16.558065],
            [49.255147, 16.558384],
            [49.253530, 16.562749],
            [49.252684, 16.552564],
            [49.258647, 16.552539],
            [49.259240, 16.548606],
            [49.255056, 16.541513],
            [49.252492, 16.543442],
            [49.250504, 16.540066],
            [49.255451, 16.538511],
            [49.254716, 16.531628],
            [49.251671, 16.530668],
            [49.245539, 16.530683],
            [49.242234, 16.534489],
            [49.241046, 16.525653],
            [49.241888, 16.525984],
            [49.243441, 16.517468],
            [49.246227, 16.518626],
            [49.250029, 16.510022],
            [49.255466, 16.502573],
            [49.257302, 16.501613],
            [49.263479, 16.508529],
            [49.271490, 16.495924],
            [49.282584, 16.463099],
            [49.276623, 16.458023],
            [49.272207, 16.450748],
            [49.267460, 16.451763],
            [49.261829, 16.445925],
            [49.253623, 16.455149],
            [49.251173, 16.454270],
            [49.235745, 16.441698],
            [49.226750, 16.437629]

        ]], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.2,
        interactive: false
    }).addTo(map);

    var marker = L.marker([0, 0]).addTo(map);

    map.on('click', function (e) {
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        marker.setLatLng(new L.LatLng(lat, lng));
        console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
    });
}

function log_out() {
    console.log("test");
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://639637b790ac47c680810698.mockapi.io/active/1', true);
    xhr.onload = function () {
        window.location.href = "index.html";
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('status=' + false);
}

