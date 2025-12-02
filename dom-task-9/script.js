let box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();

  let x = Math.floor(((e.clientX - rect.left) / rect.width) * 100);
  let y = Math.floor(((e.clientY - rect.top) / rect.height) * 100);

  console.log(x, y);

  document.body.style.setProperty("--x", `${x}%`);
  document.body.style.setProperty("--y", `${y}%`);
});

box.addEventListener("mouseleave", () => {
  document.body.style.removeProperty("--x");
  document.body.style.removeProperty("--y");
});