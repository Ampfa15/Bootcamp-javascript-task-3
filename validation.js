const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const termsError = document.getElementById("termsError");

    
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    termsError.textContent = "";


    username.style.border = "";
    email.style.border = "";
    password.style.border = "";

    
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        username.style.border = "2px solid red";
        isValid = false;
    } else if (username.value.trim().length < 3) {
        usernameError.textContent = "Username must be at least 3 characters";
        username.style.border = "2px solid red";
        isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        email.style.border = "2px solid red";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Enter a valid email address";
        email.style.border = "2px solid red";
        isValid = false;
    }

    
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required";
        password.style.border = "2px solid red";
        isValid = false;
    } else if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        password.style.border = "2px solid red";
        isValid = false;
    }

    
    if (!terms.checked) {
        termsError.textContent = "Please accept the Terms and Conditions";
        isValid = false;
    }

    
    if (isValid) {
        alert("Signup Successful!");

        form.reset();

        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        termsError.textContent = "";

        username.style.border = "";
        email.style.border = "";
        password.style.border = "";
    }
});


const resendBtn = document.getElementById("resendBtn");

let seconds = 10;

const timer = setInterval(function () {
    resendBtn.textContent = `Resend Verification (${seconds})`;

    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        resendBtn.disabled = false;
        resendBtn.textContent = "Resend Verification";
    }
}, 1000);

resendBtn.addEventListener("click", function () {
    alert("Verification Email Sent!");
});