window.addEventListener("DOMContentLoaded", () => {
  const squ = document.querySelectorAll("#board div");
  squ.forEach(square => {
    square.classList.add("square");
  });
});
