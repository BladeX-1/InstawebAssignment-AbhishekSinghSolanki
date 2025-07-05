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
