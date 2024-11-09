function validatename() {
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameMessage = document.getElementById("nameMessage");
    if (name.length >= 0) {
        nameInput.style.borderColor = "green";
        nameMessage.textContent = "Name looks good";
        nameMessage.style.color = "green";
        return true;
    }
    else {
        nameInput.style.borderColor = "red";
        nameMessage.textContent = "name should at least be 3 characters long";
        nameMessage.style.color = "red";
        return false;
    }
}

function validateemail() {
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) {
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "Valid email";
        emailMessage.style.color = "green";
        return true;
    }
    else {
        emailInput.style.borderColor = "red";
        emailMessage.textContent = "Enter a valid email address";
        emailMessage.style.color = "red";
        return false;
    }
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password");
    const passwordMessage = document.getElementById("passwordMessage");
    if (password.length >= 6) {
        passwordInput.style.borderColor = "green";
        passwordMessage.textContent = "strong password";
        passwordMessage.style.color = "green";
        return true;
    }
    else {
        passwordInput.style.borderColor = "red";
        passwordMessage.textContent = "password should be at least 6 character long";
        passwordMessage.style.color = "red";
        return false;
    }
}

function validatereview() {
    const review = document.getElementById("review").value;
    const reviewInput = document.getElementById("review");
    const reviewMessage = document.getElementById("reviewMessage");
    if (review.length >= 0) {
        reviewInput.style.borderColor = "green";
        reviewMessage.style.color = "green";
        return true;
    }
    else {
        reviewInput.style.borderColor = "red";
        reviewMessage.textContent = "Can't be empty!!";
        reviewMessage.style.color = "red";
        return false;
    }
}

document.getElementById("myform").addEventListener("submit",function(event){
    const isvalidName = validatename();
    const isvalidemail = validateemail();
    const isvalidpassword= validatePassword();
    if(!isvalidName || !isvalidemail || !isvalidpassword){
        event.preventDefault();
    }
});