$(document).ready(function(){

    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const email = document.getElementById("mail");
    const error = document.querySelector("span.error");
    const form = document.querySelector("form");

/*
    email.addEventListener("input", (event) => {
        if (email.validity.valid) {
            error.textContent = "";
            error.className = "error";
        } else {
            showError();
        }
    });
*/
    form.addEventListener("submit", (event) => {
        if (!email.validity.valid) {
            showError();
            event.preventDefault();
        }
    });

    function showError() {
        if (email.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            error.textContent = "You need to enter an email address.";
            $("#error-icon").show();
            console.log("You need to enter an email address.");
        }  else if (email.validity.typeMismatch) {
            // If the field doesn't contain an email address,
            // display the following error message.
            $("#error-icon").show();
            error.textContent = "Please provide valid email.";
            console.log("Entered value needs to be an email address.");
        }
    }

    /*$(".submit-form button").click(function(){
        console.log($("#email").text());
        if ($("#email input").text().match(regex)) {
            console.log("good");
        } else {
            console.log("bad");
        }
    });*/


});