// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Feedback form submission handling
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("feedback-message").innerText = "Thank you for your feedback!";
            this.reset();
        } else {
            document.getElementById("feedback-message").innerText = "Please fill in all fields.";
        }
    });
});
