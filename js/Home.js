const accountImage = document.getElementById("account-image");
const menu = document.getElementById("menu");

accountImage.addEventListener("click", function() {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});
