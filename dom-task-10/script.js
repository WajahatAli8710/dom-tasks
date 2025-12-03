let text = document.querySelector("h1");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let i = 0;
p = text.innerText;
let interval;
function randomLetters() {
  let randomString = p
    .split("")
    .map((char, idx) => {
      if (idx < i) {
        return char;
      }
      return letters.split("")[Math.floor(Math.random() * p.length)];
    })
    .join("");

  text.innerText = randomString;
  i += 0.4;

  if (i > p.length) {
    i = 0;
    clearInterval(interval);
  }
}
text.addEventListener("mouseenter", () => {
  clearInterval(interval);
  interval = setInterval(randomLetters, 80);
});

text.addEventListener("mouseleave", () => {
  clearInterval(interval);
});
