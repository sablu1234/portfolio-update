function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        budget: document.getElementById("budget").value,
        projectUrl: document.getElementById("projectUrl").value,
        referenceImage: document.getElementById("referenceImage").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_wucirol", "template_7xq6owl", params).then((res) => {
        alert("Your message has been sent successfully!");
    });
}

