const btnBar = document.getElementById("btn-bar");
const dropMenu = document.getElementById("dropmenu");

btnBar.addEventListener("click", () => {
  dropMenu.classList.toggle("active"); // Toggle the 'active' class on click
});
