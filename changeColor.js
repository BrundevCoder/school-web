const btn = document.getElementById("changeColor");

let newColor = "";

function getRandomColor() {
  let newColor = "";

  const colors = [
    "#ceaf24", "#ce2424", "#40ce24",
    "#24b5ce", "#2f24ce", "#24ce8d",
    "#ff8b2d"
  ]

  newColor = colors[Math.floor(Math.random() * colors.length)];

  console.log(newColor)

  return newColor;
}

function updateColor(newColor) {
  document.documentElement.style.setProperty("--anim-color", newColor)
  return;
}

function handleColor() {
  newColor = getRandomColor();

  updateColor(newColor);
}

btn.addEventListener("click", () => {
  handleColor();
});