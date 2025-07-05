function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }

    // email validation regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return false;
    }

    return true; // Submit the form
}

function liveValidate() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (name.value.trim() === "") {
        if (!name.classList.contains("invalid")) {
            name.classList.add("invalid");
        }
    } else {
        if (name.classList.contains("invalid")) {
            name.classList.remove("invalid");
        }
    }

    // email validation regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        if (!email.classList.contains("invalid")) {
            email.classList.add("invalid");
        }
    } else {
        if (email.classList.contains("invalid")) {
            email.classList.remove("invalid");
        }
    }
}
