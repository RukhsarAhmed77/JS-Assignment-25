
function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        Swal.fire({
            icon: "success",
            title: "Signup successful! You can now log in.",
            showConfirmButton: false,
            timer: 1400
        });
        email.innerHTML = "";
        password.innerHTML = "";
    } else {
        Swal.fire({
            icon: "error",
            title: "Please fill out both fields!",
            showConfirmButton: false,
            timer: 1400
        });
    }
}

function login() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        Swal.fire({
            icon: "success",
            title: "Login successful! Welcome back.",
            showConfirmButton: false,
            timer: 1400
        });
        loginEmail.innerHTML = "";
        loginPassword.innerHTML = "";
        setTimeout(function() {
            window.location.href = "home/home.html";
        }, 1400);
    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid email or password. Please try again!",
            showConfirmButton: false,
            timer: 1400
        });
    }
}