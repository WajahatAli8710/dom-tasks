const btn = document.querySelector("#btn");
const main = document.querySelector("main");
const text = [
  "Believe in yourself",
  "Dreams need action",
  "Stay always humble",
  "Silence shows strength",
  "Focus brings success",
];
btn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * text.length);
  let x = Math.floor(Math.random() * 75 + 1);
  let y = Math.floor(Math.random() * 75 - 1);
  let deg = Math.floor(Math.random() * 180);
  let scale = Math.floor(Math.random() * 2 + 1);
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  const h1 = document.createElement("h1");
  h1.innerHTML = text[num];
  h1.style.position = "absolute";
  h1.style.top = y + "%";
  h1.style.left = x + "%";
  h1.style.rotate = deg + "deg";
  h1.style.scale = scale;
  h1.style.color = `rgb(${c1} ,${c2} , ${c3})`;

  main.appendChild(h1);
});