document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check login info
  if (username === "admin" && password === "password") {
    // Store login info into session
    sessionStorage.setItem("username", username);

    // Create a cookie to store login info
    document.cookie =
      "username=" +
      username +
      "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

    // Redirect to another page
    window.location.href = "another_page.html";

    // Logout after 20 seconds
    setTimeout(function () {
      // Display a notification
      alert("You have been logged out due to inactivity.");

      // Logout
      /*       document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";*/

      window.location.href = "index.html";
    }, 8000);
  } else {
    alert("Invalid username or password");
  }
});
