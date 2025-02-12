document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("portfolio-title");
  const thumbnail = document.getElementById("thumbnail");
  const description = document.getElementById("skill-description");

  // Animate title
  setTimeout(() => {
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }, 500);

  // Animate thumbnail
  setTimeout(() => {
    thumbnail.style.opacity = 1;
    thumbnail.style.transform = "scale(1)";
  }, 1000);

  // Animate description
  setTimeout(() => {
    description.style.opacity = 1;
  }, 1500);
});
