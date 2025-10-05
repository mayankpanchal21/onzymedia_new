function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
}

function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const allAnswers = document.querySelectorAll(".faq-answer");

  allAnswers.forEach((item) => {
    if (item !== answer) {
      item.classList.remove("active");
    }
  });

  answer.classList.toggle("active");
}

// Smooth scroll for work section
const workSlider = document.querySelector(".work-slider");
let isDown = false;
let startX;
let scrollLeft;

workSlider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - workSlider.offsetLeft;
  scrollLeft = workSlider.scrollLeft;
});

workSlider.addEventListener("mouseleave", () => {
  isDown = false;
});

workSlider.addEventListener("mouseup", () => {
  isDown = false;
});

workSlider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - workSlider.offsetLeft;
  const walk = (x - startX) * 2;
  workSlider.scrollLeft = scrollLeft - walk;
});
