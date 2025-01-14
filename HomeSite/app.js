const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "250px"; // Adjust width to show sidebar
}

// Close the overlay
function closeNav(event) {
  // Only close if the click happened outside the sidebar content
  const overlayContent = document.querySelector(".overlay-content");
  if (
    event.target === overlayContent ||
    !event.target.closest(".overlay-content")
  ) {
    document.getElementById("myNav").style.width = "0"; // Hide sidebar
  }
}

