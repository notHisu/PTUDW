document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var website = document.getElementById("website").value;

  var emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
  var passwordPattern = /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/;
  var usernamePattern = /^[a-z\d_]{2,20}$/i;
  var websitePattern =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;

  document.getElementById("emailError").textContent = emailPattern.test(email)
    ? ""
    : "Invalid email address";
  document.getElementById("usernameError").textContent = usernamePattern.test(
    username
  )
    ? ""
    : "Invalid username";
  document.getElementById("passwordError").textContent = passwordPattern.test(
    password
  )
    ? ""
    : "Invalid password";
  document.getElementById("websiteError").textContent = websitePattern.test(
    website
  )
    ? ""
    : "Invalid website address";
});
