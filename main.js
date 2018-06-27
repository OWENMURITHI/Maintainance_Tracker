//FOR THIS PROJECT USER USERNAME AND PASSWORD ARE USERNAME

var attempt = 3; // Variable to count number of attempts.


// Below function Executes on click of login button.
function validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "user" && password == "pass") {
        alert("Login successful as User");
        window.location = "htdocs/user.html"; // Redirecting to other page.
        return false;
    }
    if (username == "admin" && password == "admin") {
        alert("Login successful as Amin");
        window.location = "htdocs/admin.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function createAccount() {
    window.location = "htdocs/SignUp.html";
}