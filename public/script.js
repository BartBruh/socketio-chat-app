var socket = io();

const messages_ul = document.getElementById("messages-ul");
const main_form = document.getElementById("main-form");
const main_input = document.getElementById("main-input");

main_form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents form from submitting i.e. default operation on clicking submit button
    if (main_input.value){
        socket.emit("chat message", main_input.value);
        main_input.value = "";
    }
})

socket.on("chat message", (msg) => {
    let msg_li = document.createElement("li");
    msg_li.textContent = msg;
    messages_ul.appendChild(msg_li);
    msg_li.scrollIntoView(false);
})