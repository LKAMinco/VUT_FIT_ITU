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

// Different icon

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 50],
        shadowSize:   [0, 0],
        iconAnchor:   [0, 40],
        shadowAnchor: [4, 62],
        popupAnchor:  [20, 0]
    }
});

var greenIcon = new LeafIcon({
    iconUrl: 'https://pngimg.com/uploads/gps/gps_PNG65.png',
})

// End of different icon

var filter_arr = [];

var marker_list = [];
var selected_sort;

function reset_filters(){
    filter_arr = [
        "Problémy na cestách",
        "Lavičky",
        "Nelegálne skládky",
        "Parky a zeleň",
        "Opustené vozidlá",
        "Detské ihriská",
        "Vandalizmus",
        "Ostatné",
        "Aktuálne riešené",
        "Vyriešené",
        "Prijaté"
    ]
    selected_sort = "name_asc";

    var list = document.getElementById('categories_list');
    Array.from(list.children).forEach(item => {
        item.setAttribute("class", "selected_filter");
    })
    list = document.getElementById('conditions_list');
    Array.from(list.children).forEach(item => {
        item.setAttribute("class", "selected_filter");
    })
    set_sort(selected_sort);
}

function loadTickets() {
    marker_list.forEach(marker => {
        map.removeLayer(marker);
    })
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://639637b790ac47c680810698.mockapi.io/tickets', true);
    xhr.onload = function () {
        var ticket_list = document.getElementById('ticket_list');
        ticket_list.innerHTML = "";
        var tickets = JSON.parse(this.responseText);
        var filtered = tickets.filter( (ticket) => {
            return filter_arr.includes(ticket.category) && filter_arr.includes(ticket.status);
        })
        filtered.sort((a,b) => {
            const nameB = b.title.toUpperCase();
            const nameA = a.title.toUpperCase();

            const dateB = b.date;
            const dateA = a.date;
            switch(selected_sort){
                case "name_asc" :
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                case "name_desc" :
                    if (nameA < nameB) {
                        return 11;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                    return 0;
                case "age_asc" :
                    if (dateA < dateB) {
                        return -1;
                    }
                    if (dateA > dateB) {
                        return 1;
                    }
                    return 0;
                case "age_desc" :
                    if (dateA < dateB) {
                        return 1;
                    }
                    if (dateA > dateB) {
                        return -1;
                    }
                    return 0;
            }
        })
        filtered.forEach(ticket => {
            //const marker = L.marker([49.152556, 16.679267], {icon: greenIcon}).addTo(map);
            const marker = L.marker([ticket.lat, ticket.long]).addTo(map);
            marker_list.push(marker);
            var popup_string = "<div id='map_marker_popup'>" +
                         "<img src='" + ticket.image_path + "' alt=\".\">" +
                         "<a>" + ticket.title + "</a><br>" +
                         "<a>Kategória: " + ticket.category + "</a><br>" +
                         "<a>Stav: " + ticket.status + "</a><br>" +
                         "<button id=\"popup_button\" onclick=\"ticket_detail(" + ticket.id + ")\">Detaily tiketu</button>"
                         "</div>";
            marker.bindPopup(popup_string);
            var list_string = "<div id='map_list_item'>" +
                              "<img src='" + ticket.image_path + "' alt=\".\">" +
                              "<a>" + ticket.title + "</a><br>" +
                              "<a>Kategória: " + ticket.category + "</a><br>" +
                              "<a>Stav: " + ticket.status + "</a><br>" +
                              "<a>Adresa: " + ticket.address + "</a><br>" +
                              "<button id=\"list_item_button\" onclick=\"ticket_detail(" + ticket.id + ")\">Detaily tiketu</button>"
                              "</div>";
            ticket_list.innerHTML += list_string;
        });
    }
    xhr.send();
}

window.onload = function() {
    reset_filters();
}

function ticket_detail(id){
    var popup = document.getElementById("ticket_info");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://639637b790ac47c680810698.mockapi.io/tickets', true);
    xhr.onload = function () {
        var overlay = document.getElementById("background-blur");
        overlay.setAttribute("class", "blur-active");
        var div = document.getElementById("ticket_detail");
        div.setAttribute("class", "hidden_ticket");

        overlay.addEventListener('click', () => {
            div.removeAttribute("class");
            overlay.removeAttribute("class");
        })
        var tickets = JSON.parse(this.responseText);
        var filtered = tickets.filter( (ticket) => {
            return ticket.id == id;
        })
        filtered = filtered[0];
        popup.innerHTML = "<img src=\"" + filtered.image_path + "\" alt=\".\"></img>" +
                          "<h1>" + filtered.title + "</h1>" +
                          "<p>" + filtered.description + "</p>" +
                          "<div>" +
                          "<a>Adresa závady: " + filtered.address + "</a><br>" +
                          "<a>Kategória: " + filtered.category + "</a><br>" +
                          "<a>Stav závady: " + filtered.status + "</a><br>" +
                          "<a>Dátum pridania: " + filtered.date + "</a>"+
                          "</div>";
        load_comments(id);
        var comment_button = document.getElementById("comment_button");
        comment_button.setAttribute("onclick", "add_comment(this.form, " + id + ")")
    }
    xhr.send();
}

function load_comments(id){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://639637b790ac47c680810698.mockapi.io/comments', true);
    xhr.onload = function () {
        var div = document.getElementById("comment_list");
        var comments = JSON.parse(this.responseText);
        var filtered = comments.filter( (comment) => {
            return comment.ticket_id == id;
        })
        var output_string = "";
        filtered.forEach(comment => {
            output_string += "<div class='comment_div'>" +
                "<div class='comment_header'>" +
                "<h1 id='" + comment.id + "'></h1>" +
                "<h1>" + comment.date + " " + comment.time + "</h1>" +
                "</div>" +
                "<p>" + comment.text + "</p>" +
                "</div>";
            readName(comment.user_email, comment.id);
        })
        div.innerHTML = output_string;
    }
    xhr.send();
}

function readName(email, id){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://639637b790ac47c680810698.mockapi.io/users', true);
    xhr.onload = function () {
        var users = JSON.parse(this.responseText);
        var filtered = users.filter( (user) => {
            return user.email == email;
        })
        filtered = filtered[0];
        var text = document.getElementById(id);
        text.innerHTML = filtered.name + " " + filtered.surname;
    }
    xhr.send();
}

function open_filter_menu(menu, img){
    if(document.getElementById(menu).hasAttribute("class")){
        document.getElementById(menu).removeAttribute("class");
        document.getElementById(img).setAttribute("src", "list_opened.png");
    }
    else{
        document.getElementById(menu).setAttribute("class", "hidden_list");
        document.getElementById(img).setAttribute("src", "list_closed.png");
    }
}

function set_filter(filter){
    if(document.getElementById(filter).hasAttribute("class")){
        document.getElementById(filter).removeAttribute("class");
        filter_arr =  filter_arr.filter(function(e) { return e !== filter });
    }
    else{
        document.getElementById(filter).setAttribute("class", "selected_filter");
        filter_arr.push(filter);
    }
    loadTickets();
}

function set_sort(sort){
    if(!document.getElementById(sort).hasAttribute("class")){
        selected_sort = sort;
        var sort_types = document.getElementById(sort).parentElement.children;
        for(let i = 0; i < sort_types.length; i++){
            if(sort_types[i].hasAttribute("class")){
                sort_types[i].removeAttribute("class");
            }
        }
        document.getElementById(sort).setAttribute("class", "selected_filter");
        var text = '';
        switch(sort){
            case "name_asc" : text = "Názvu A-Z"; break;
            case "name_desc" : text = "Názvu Z-A"; break;
            case "age_asc" : text = "Najnovších"; break;
            case "age_desc" : text = "Najstarších"; break;
        }
        document.getElementById('sort_text').innerHTML = "Zoradené podľa: " + text;
    }
    loadTickets();
}

var index = 0;
function add_comment(form, id){
    var div = document.getElementById("comment_list");
    var date = new Date().toISOString().substr(0, 19).replace('T', ' ');
    div.innerHTML += "<div class='comment_div'>" +
        "<div class='comment_header'>" +
        "<h1 id='fake" + index + "'></h1>" +
        "<h1>" + date + "</h1>" +
        "</div>" +
        "<p>" + form.comment_text.value + "</p>" +
        "</div>";
    readName("basic.user@email.com", "fake" + index);
    index++;
    document.getElementById("comment_text").value = "";
}