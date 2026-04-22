// toogle mode script
const toogleButton = document.getElementById("modeBtn");
const icon = document.getElementById("icon");

const sunSymbol = "sunny";
const moonSymbol = "dark_mode";

let isDark = false;

toogleButton.addEventListener("click", () => {
  isDark = !isDark
  document.body.classList.toggle("dark-mode");
  icon.innerText = isDark ? sunSymbol : moonSymbol
  console.log(isDark ? "Dark Mode" : "Light Mode");
})