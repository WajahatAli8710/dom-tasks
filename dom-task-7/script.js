let piano = document.querySelector(".piano");

const songs = {
  a: "./songs/28.mp3",
  b: "./songs/29.mp3",
  c: "./songs/30.mp3",
  d: "./songs/31.mp3",
  e: "./songs/32.mp3",
  f: "./songs/33.mp3",
  g: "./songs/34.mp3",
  h: "./songs/35.mp3",
  i: "./songs/36.mp3",
  j: "./songs/37.mp3",
  k: "./songs/38.mp3",
  l: "./songs/39.mp3",
  m: "./songs/40.mp3",
  n: "./songs/41.mp3",
  o: "./songs/42.mp3",
  p: "./songs/43.mp3",
  q: "./songs/44.mp3",
  r: "./songs/45.mp3",
  s: "./songs/46.mp3",
  t: "./songs/47.mp3",
  u: "./songs/48.mp3",
  v: "./songs/49.mp3",
  w: "./songs/50.mp3",
  x: "./songs/51.mp3",
  y: "./songs/52.mp3",
  z: "./songs/53.mp3",
};
let notes = "";
for (let i = 97; i < 123; i++) {
  let alpha = String.fromCharCode(i);
  notes += `<div class="note" id="${alpha}">${alpha.toUpperCase()}</div>`;
}
piano.innerHTML = notes;

let allnotes = document.querySelectorAll(".note");

allnotes.forEach(function (note) {
  note.addEventListener("click", function () {
    let audio = new Audio(songs[note.id]);
    audio.play();
    note.classList.add("active");
    setTimeout(function () {
      note.classList.remove("active");
    }, 200);
  });
});

document.addEventListener("keydown", function (elem) {
  let key = elem.key.toLowerCase();

  allnotes.forEach(function (note) {
    if (note.id === key) {
      note.classList.add("active");
      setTimeout(function () {
        note.classList.remove("active");
      }, 200);
    }
  });

  if (songs[key]) {
    let audio = new Audio(songs[key]);
    audio.play();
  }
});
