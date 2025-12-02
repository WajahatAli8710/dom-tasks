let text = document.querySelector("h1");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let i = 0;
p = text.innerText;

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
}
text.addEventListener("mouseenter", () => {
  setInterval(randomLetters, 80);
});
