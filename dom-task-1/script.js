let num = document.querySelector("#num");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let resetBtn = document.querySelector("#reset");

let counter = 0;
num.textContent = counter;
increment.addEventListener("click", function () {
  increment.style.scale = 0.9;
  setTimeout(function () {
    increment.style.scale = 1;
  }, 200);
  counter++;
  num.textContent = counter;
});

decrement.addEventListener("click", function () {
  decrement.style.scale = 0.9;
  setTimeout(function () {
    decrement.style.scale = 1;
  }, 200);
  counter--;
  num.textContent = counter;
});

resetBtn.addEventListener("click", function () {
  resetBtn.style.scale = 0.9;
  setTimeout(function () {
    resetBtn.style.scale = 1;
  }, 200);
  counter = 0;
  num.textContent = counter;
});
