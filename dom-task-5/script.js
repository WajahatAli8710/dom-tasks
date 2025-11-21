let image = document.querySelector("#image");
let icon = document.querySelector("#heart-icon");
let showHeart = document.querySelector("#show-heart");
console.log(showHeart);

let flag = 0;

function likeEffect() {
  icon.style.opacity = 1;
  icon.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  showHeart.classList.replace("ri-heart-line", "ri-heart-fill");

  setTimeout(function () {
    icon.style.transform = "translate(-50%, -400%) scale(1) rotate(-40deg)";
  }, 500);

  setTimeout(function () {
    icon.style.opacity = 0;
  }, 700);
  setTimeout(function () {
    icon.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1000);
}

image.addEventListener("dblclick", function () {
  likeEffect();
  flag++;
});

showHeart.addEventListener("click", function () {
  if (flag === 0) {
    showHeart.classList.replace("ri-heart-line", "ri-heart-fill");
    flag++;
    likeEffect();
  } else {
    showHeart.classList.replace("ri-heart-fill", "ri-heart-line");
    flag--;
  }
});
