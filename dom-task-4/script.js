let btn = document.querySelector("button");
let bar = document.querySelector("#inner");
let h1 = document.querySelector("h1");
let grow = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  btn.style.opacity = 0.5;
  let num = Math.floor(Math.random() * 50) + 50;

  let load = setInterval(() => {
    grow++;
    bar.style.width = grow + "%";
    h1.textContent = grow + "%";
  }, num);

  setTimeout(function () {
    clearInterval(load);
    grow = 0;
    bar.style.width = grow + "%";
    h1.textContent = grow + "%";
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 1;
    btn.style.pointerEvents = "";
    const a = document.createElement("a");
    a.href = `./dom.txt`;
    a.download = "dom.txt";
    a.click();
  }, num * 100);

  console.log("Download in", num / 10, "Second");
});
