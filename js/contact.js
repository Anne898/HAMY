var form = document.getElementById("contact_form");
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var textAreaMessage = document.getElementById("message-text");

var formButton = document.getElementById("button_contact");

var maxLength = 200;


var showAlertError = function (message) {
    // console.log(message);
    // alert(message);
    var alertContainer = document.getElementById("alert_danger");
    var textAlert = document.getElementById("alert_danger_text");

    // Mostrar el mensaje (hacer que el contenedor sea visible)
    if (alertContainer.className.indexOf("visible") === -1) {
        alertContainer.className += " visible";
    }

    // Cambiar el texto del mensaje
    textAlert.textContent = message;
}

var hideAlertError = function (message) {
    // console.log(message);
    // alert(message);
    var alertContainer = document.getElementById("alert_danger");
    var textAlert = document.getElementById("alert_danger_text");

    if (alertContainer.className.indexOf("hidden") !== -1) {
        alertContainer.className += "hidden";
    }

    // Cambiar el texto del mensaje
    textAlert.textContent = message;
}



var showCorrect = function (message) {
    // console.log(message);
    // alert(message);
    var correctContainer = document.getElementById("correct_text");
    var textCorrect = document.getElementById("alert_correct_text");

    // Mostrar el mensaje (hacer que el contenedor sea visible)
    if (correctContainer.className.indexOf("visible") === -1) {
        correctContainer.className += " visible";
    }

    // Cambiar el texto del mensaje
    textCorrect.textContent = message;
}



var disableFormButton = function () {
    if (formButton.className.indexOf("disabled") === -1) {
        formButton.className += " disabled";
    }

    formButton.disabled = true;

}

var enableFormButton = function () {
    // Darle estilo de deshabilitado
    formButton.className = formButton.className.replace("disabled", "");
    // Deshabilitar el botón
    formButton.disabled = false;
}


var setFormButtonText = function (text) {
    formButton.textContent = text;
}


var nameEmpty = function () {
    document.getElementById("nameLabel").className = "form-label-empty";
    document.getElementById("name").required = true;
}

var emailEmpty = function () {
    document.getElementById("emailLabel").className = "form-label-empty";
    document.getElementById("email").required = true;
}

var messageTextEmpty = function () {
    document.getElementById("messageTextLabel").className = "form-label-empty";
    document.getElementById("message-text").required = true;
}

var validateAndSend = function (e) {
    console.log('e', e);
    // Prevenir la funcionalidad default del submit de un form
    // (Nosotros daremos submit manualmente)
    e.preventDefault();
    console.log("validateAndSend");
    var name = inputName.value;
    var email = inputEmail.value;
    var messageText = textAreaMessage.value;
    var lengthMessage = textAreaMessage.value.length;

    if (name === "" && email === "" && messageText === "") {
        nameEmpty();
        emailEmpty();
        messageTextEmpty();

        showAlertError("Por favor introduce los datos requeridos.");

        return;
    }

    if (name === "") {
        nameEmpty();
        showAlertError("Por favor introduce los datos requeridos.");

        return;
    }


    if (email === "") {
        emailEmpty();
        showAlertError("Por favor introduce los datos requeridos.");

        return;
    }

    if (lengthMessage === 0) {
        messageTextEmpty();
        showAlertError("Por favor introduce los datos requeridos.");

        return;
    }

    disableFormButton();
    setFormButtonText("Enviando...")
    setTimeout(function () {

        if (lengthMessage > maxLength) {
            showAlertError("Maximo 200 caracteres");

        }

        else {
            disableFormButton();
            hideAlertError();
            showCorrect("Mensaje enviado");
            setFormButtonText("Enviado")

        }

    }, 1500);



}



form.addEventListener("submit", validateAndSend);