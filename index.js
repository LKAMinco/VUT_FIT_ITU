var comment_button = document.getElementById("comment_button");
comment_button.setAttribute("onclick", "sendMessage(this.form, " + id + ")")

function sendMessage(form, id) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var output = '';
        output += '<div class="messages">' +
            '<blockquote id="user_chat">' +
            '<span class="chat_user">reeeeee</span>' +
            '   </blockquote>' +
            '   <figure id="user_chat_pic">' +
            '       <img src="src/pictures/user_pic.png" alt="Radovan">' +
            '   </figure>' +
            '</div>' +
            '<div class="messages">' +
            '   <blockquote>' +
            '       <span>Omlouváme se, ale chatbot momentálně není dostupný.</span>' +
            '   </blockquote>' +
            '<figure>' +
            '<img src="src/pictures/user_pic.png" alt="Viktor">' +
            '       </figure>' +
            '</div>';
        document.getElementById('getMessage').innerHTML = output;
        var form = document.getElementById("report_form");
        form.addEventListener('submit', handleForm);

    }
    xhr.send();
}


function handleForm(event) { event.preventDefault(); }
