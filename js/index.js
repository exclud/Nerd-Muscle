// Form Validation 
const email = document.getElementById("mail");
email.addEventListener("input", function (event){
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Your email address");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
    console.log("ysy");
});