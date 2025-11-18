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
  console.log(num);

  let x = Math.floor(Math.random() * 80 + 1);
  let y = Math.floor(Math.random() * 80 - 1);
  let deg = Math.floor(Math.random() * 40);
  let scale = Math.floor((Math.random() * 2) +1) ;
  console.log(scale , "scale");

  const h1 = document.createElement("h1");
  h1.innerHTML = text[num];
  h1.style.position = "absolute";
  h1.style.top = y + "%";
  h1.style.left = x + "%";
  h1.style.rotate = deg + "deg";
  h1.style.scale = scale;

  main.appendChild(h1);
});
