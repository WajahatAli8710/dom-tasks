let allreels = document.querySelector(".allreels");
let btn = document.querySelector(".btn");
let reelData = [
  {
    video: "./videos/video1.mp4",
    dp: "./images/dp-1.webp",
    username: "emily_smith",
    isFollow: false,
    likes: 145,
    isLiked: false,
    comments: 12,
    caption: "Enjoying the weekend vibes",
    isMuted: false,
  },
  {
    video: "./videos/video2.mp4",
    dp: "./images/dp-2.webp",
    username: "alex_brown",
    isFollow: false,
    likes: 98,
    isLiked: false,
    comments: 5,
    caption: "Late night grind",
    isMuted: true,
  },
  {
    video: "./videos/video3.mp4",
    dp: "./images/dp-3.webp",
    username: "michael_jordan",
    isFollow: false,
    likes: 230,
    isLiked: false,
    isMuted: true,

    comments: 20,
    caption: "New day, new energy",
  },
  {
    video: "./videos/video4.mp4",
    dp: "./images/dp-4.webp",
    username: "sophia_wilson",
    isFollow: false,
    likes: 77,
    isLiked: false,
    comments: 8,
    isMuted: true,

    caption: "Feeling the moment",
  },
  {
    video: "./videos/video5.mp4",
    dp: "./images/dp-5.webp",
    username: "liam_james",
    isFollow: false,
    likes: 150,
    isLiked: false,
    isMuted: true,

    comments: 15,
    caption: "Life hits different with good music",
  },
];

function createReel() {
  let sum = "";
  reelData.forEach(function (elem, idx) {
    sum += `<div class="reel">
          <video class="video" id="${idx}" src="${elem.video}" loop autoplay ${
      elem.isMuted ? "muted" : ""
    }  ></video>
          <div class="top">
            <h4 class="toggle" id="${idx}">${elem.isMuted? `<i class="ri-volume-mute-line"></i>`:`<i class="ri-volume-up-line"></i>`}</h4>
          </div>
          <div class="right">
         <div class="like" id="${idx}">
  <h4>
    ${
      elem.isLiked
        ? `<i class="ri-heart-fill"></i>`
        : `<i
      class="ri-heart-line"
    ></i
    >`
    }
  </h4>
  <h6>${elem.likes}</h6>
</div>
<div class="comment">
  <h4><i class="ri-chat-1-line"></i></h4>
  <h6>${elem.comments}</h6>
</div>
<div class="share">
  <h4><i class="ri-send-plane-line"></i></h4>
</div>
<div class="save">
  <h4><i class="ri-bookmark-line"></i></h4>
</div>
            <div id="more">
              <h4><i class="ri-more-2-line"></i></h4>
            </div>

            <img
              src="${elem.dp}"
              alt=""
            />
          </div>
          <div class="bottom">
            <div class="user-dets">
              <img
                src="${elem.dp}"
                alt=""
              />
              <h2>username</h2>
              <button class="follow" id="${idx}">${
      elem.isFollow ? "Unfollow" : "follow"
    }</button>
            </div>
            <p>${elem.caption}</p>
          </div>
        </div>`;
  });
  allreels.innerHTML = sum;
}

createReel();

allreels.addEventListener("click", (dets) => {
  if (dets.target.className === "like") {
    if (!reelData[dets.target.id].isLiked) {
      reelData[dets.target.id].likes++;
      reelData[dets.target.id].isLiked = false;
      createReel();
    } else {
      reelData[dets.target.id].likes--;
      reelData[dets.target.id].isLiked = false;
      createReel();
      console.log(sum);
    }
  }
  if (dets.target.className === "follow") {
    if (!reelData[dets.target.id].isFollow) {
      reelData[dets.target.id].isFollow = false;
      createReel();
    } else {
      reelData[dets.target.id].isFollow = false;
      createReel();
    }
  }

  if (dets.target.className === "toggle") {
    if (!reelData[dets.target.id].isMuted) {
      reelData[dets.target.id].isMuted = true;

      createReel();
    } else {
      reelData[dets.target.id].isMuted = false;
      createReel();
    }
  }
});
