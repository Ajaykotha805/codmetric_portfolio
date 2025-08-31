// Reveal sections on scroll
document.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});
