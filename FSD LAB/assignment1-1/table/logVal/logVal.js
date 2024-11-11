function validateForm() {
    // Get the form elements
    const username = document.forms["loginForm"]["username"].value;
    const password = document.forms["loginForm"]["password"].value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Username validation: check if it's empty
    if (username === "") {
        errorMessage.textContent = "Username is required.";
        return false;
    }

    // Password validation: check if it's empty and if it's at least 6 characters long
    if (password === "") {
        errorMessage.textContent = "Password is required.";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    // If both validations pass, return true to allow form submission
    return true;
}