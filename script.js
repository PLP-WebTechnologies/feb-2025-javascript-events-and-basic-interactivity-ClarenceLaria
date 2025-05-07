const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const namePreview = document.getElementById("namePreview");
const emailPreview = document.getElementById("emailPreview");
const contactForm = document.getElementById("contactForm");

// Live Preview
nameInput.addEventListener("input", () => {
  namePreview.textContent = nameInput.value;
});

emailInput.addEventListener("input", () => {
  emailPreview.textContent = emailInput.value;
});

// Form validation and submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
  contactForm.reset();
  namePreview.textContent = "";
  emailPreview.textContent = "";
});
