// Dark Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.innerText = "🌙";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Contact Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
        alert('Thank you for your message!');
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
