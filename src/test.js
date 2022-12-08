function reportFirst(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/users.json', true);
    xhr.onload = function () {
        var output = '';

        output += '<section id="services">\n' +
            '        <div class="content">\n' +
            '            <h3>1/5 Vyberte kategorii hlášení:</h3>\n' +
            '            <div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/roads.svg" alt=".">\n' +
            '                            <img src="pictures/roads.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Problémy na silnicích</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/bench.svg" alt=".">\n' +
            '                            <img src="pictures/bench.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Lavičky</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/dump.svg" alt=".">\n' +
            '                            <img src="pictures/dump.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Ilegální skládky</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/park.svg" alt=".">\n' +
            '                            <img src="pictures/park.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Parky a zeleň</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/car.svg" alt=".">\n' +
            '                            <img src="pictures/car.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Opuštěná vozidla</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/playground.svg" alt=".">\n' +
            '                            <img src="pictures/playground.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Dětská hřiště</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
            '                    <div class="services-card">\n' +
            '                        <div>\n' +
            '                            <img src="pictures/vandalism.svg" alt=".">\n' +
            '                            <img src="pictures/vandalism.svg" alt=".">\n' +
            '                        </div>\n' +
            '                        <h4>Vandalismus</h4>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="services-column">\n' +
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
            '    </section>';
        document.getElementById('report_first_part').innerHTML = output;
    }

    xhr.send();
}