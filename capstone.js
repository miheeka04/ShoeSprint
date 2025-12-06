// Scroll to specific section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Handle Buy Button Click
function buyProduct(productName) {
  alert(`Thank you for choosing ${productName}! Redirecting to checkout...`);
}

// Handle Contact Form Submit
function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  document.querySelector('form').reset();
}
