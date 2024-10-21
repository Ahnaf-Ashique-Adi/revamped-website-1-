// Initialize EmailJS
(function(){
    emailjs.init("qsd9jx74pFrgIqpQA"); // Replace with your EmailJS user ID
})();

// Handle button click for form submission
document.getElementById('sendButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form values
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Send email using EmailJS
        emailjs.send("service_qzdh757", "template_xwmiulm", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset form after submission
        }, function(error) {
            alert('Failed to send message: ' + error.text);
        });
    } else {
        alert("Please fill in all fields.");
    }
});
