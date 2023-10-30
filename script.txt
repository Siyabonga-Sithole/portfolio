


<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function () {
    emailjs.init("Vm6f495-LXGGAFk7s"); // Replace with your EmailJS user ID

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get user input
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
      }

      // Prepare the email using EmailJS
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      // Send the email using EmailJS
      emailjs.send("service_uziafqt", "template_zp6yuhtju", templateParams)
        .then(function (response) {
          alert("Email sent successfully!");
          form.reset(); // Clear the form fields
        }, function (error) {
          alert("Failed to send email. Please try again later.");
        });
    });
  })();
</script>
