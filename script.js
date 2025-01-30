document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const phone = document.getElementById("phone");

    function validatePasswords() {
        if (password.value.length < 8 || password.value.length > 12) {
            password.setCustomValidity("Password must be between 8 and 12 characters");
            password.style.borderColor = "red";
        } else {
            password.setCustomValidity("");
            password.style.borderColor = "#E5E7EB"; // Reset to default
        }

        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
            confirmPassword.style.borderColor = "red";
        } else {
            confirmPassword.setCustomValidity("");
            confirmPassword.style.borderColor = "#E5E7EB"; // Reset to default
        }
    }

    function validatePhone() {
        const phonePattern = /^\+30 \d{10}$/; // Matches "+30 " followed by 10 digits
        if (!phonePattern.test(phone.value)) {
            phone.setCustomValidity("Phone number must be in the format: +30 6976769843");
            phone.style.borderColor = "red";
        } else {
            phone.setCustomValidity("");
            phone.style.borderColor = "#E5E7EB"; // Reset to default
        }
    }

    password.addEventListener("input", validatePasswords);
    confirmPassword.addEventListener("input", validatePasswords);
    phone.addEventListener("input", validatePhone);
});
