const form = document.querySelector("form");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var my_text = `-Name: ${name} %0A - email: ${email} %0A - message: ${message}`;


    var token = "5180409394:AAERkpjdlEJl_z0prwGLOD9q_Ww5prOyZBk";
    var chat_id = -1001727467125
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;


    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    
    console.log("Message successfully sended!")


})