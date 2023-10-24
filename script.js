.projects-carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; /* optional */
}

.project-box {
  flex: 0 0 auto;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  background-color: #f0f0f0;
  scroll-snap-align: start;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}


<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function () {
    emailjs.init("racoonturtle@gmail.com"); // Replace with your EmailJS user ID

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
