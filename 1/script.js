const h1 = document.getElementById("h1");

function setColor(name) {
  document.body.style.backgroundColor = name;
  h1.style.color = "white";
}

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const bgColor = `rgba(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = bgColor;
}
