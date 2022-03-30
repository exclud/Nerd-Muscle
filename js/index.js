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

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

  //Login Details
  