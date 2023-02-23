const button = document.getElementById("button");

button.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}
