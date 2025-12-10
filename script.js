function validateForm() {

    document.getElementById('nameError').innerHTML = '';
    document.getElementById('regNoError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';

    let name = document.getElementById('studentName').value.trim();
    let reg = document.getElementById('regNo').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();

    let valid = true;

    if (name === "") {
        document.getElementById('nameError').innerHTML = "Name required";
        valid = false;
    }

    if (reg === "") {
        document.getElementById('regNoError').innerHTML = "Registration number required";
        valid = false;
    }

    if (email === "") {
        document.getElementById('emailError').innerHTML = "Email required";
        valid = false;
    }

    if (phone === "") {
        document.getElementById('phoneError').innerHTML = "Mobile number required";
        valid = false;
    }

    if (!valid) {
        alert("All fields are required");
        return false;
    }

    if (!/([a-zA-Z].*){3}/.test(name)) {
        document.getElementById('nameError').innerHTML = "At least 3 alphabets";
        valid = false;
    }

    let at = email.indexOf('@');
    let dot = email.lastIndexOf('.');
    if (at === -1 || dot === -1 || at > dot) {
        document.getElementById('emailError').innerHTML = "Invalid email";
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').innerHTML = "Enter 10 digits";
        valid = false;
    }

    if (!/^\d{2}[A-Za-z]{3}\d{4}$/.test(reg)) {
        document.getElementById('regNoError').innerHTML = "Invalid registration number";
        valid = false;
    }

    if (!valid) {
        alert("Constraints violated");
        return false;
    }

    alert("Thanks for registration, " + name);
    window.location.href = "index.html";
    return false;
}

document.getElementById('cancelBtn').onclick = function () {
    window.location.href = "index.html";
}
