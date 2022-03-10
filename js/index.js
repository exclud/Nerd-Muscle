// Form Validation 
const email = document.getElementById("mail");
email.addEventListener("input", function (event){
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Your email address");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }