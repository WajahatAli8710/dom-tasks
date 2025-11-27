let section = document.querySelector("section");
const reels = [
  {
    video: "./videos/video1.mp4",
    dp: "./images/dp-1.webp",
    username: "emily_smith",
    isFollow: true,
    likes: 145,
    isLiked: false,
    comments: 12,
    description: "Enjoying the weekend vibes ✨"
  },
  {
    video: "./videos/video2.mp4",
    dp: "./images/dp-2.webp",
    username: "alex_brown",
    isFollow: false,
    likes: 98,
    isLiked: true,
    comments: 5,
    description: "Late night grind 🔥"
  },
  {
    video: "./videos/video3.mp4",
    dp: "./images/dp-3.webp",
    username: "michael_jordan",
    isFollow: true,
    likes: 230,
    isLiked: false,
    comments: 20,
    description: "New day, new energy 💪"
  },
  {
    video: "./videos/video4.mp4",
    dp: "./images/dp-4.webp",
    username: "sophia_wilson",
    isFollow: false,
    likes: 77,
    isLiked: true,
    comments: 8,
    description: "Feeling the moment 🌸"
  },
  {
    video: "./videos/video5.mp4",
    dp: "./images/dp-5.webp",
    username: "liam_james",
    isFollow: true,
    likes: 150,
    isLiked: false,
    comments: 15,
    description: "Life hits different with good music 🎧"
  }
];

let sum = "";
reels.forEach(function (elem) {
  sum += `<div class="reel">
          <video src="${elem.video}" loop autoplay muted  ></video>
          <div class="top">
            <h4><i class="ri-volume-up-fill"></i></h4>
          </div>
          <div class="right">
            <div id="like" class="feature">
              <h4><i class="ri-heart-line"></i></h4>
              <h6>42.7k</h6>
            </div>
            <div id="comment" class="feature">
              <h4><i class="ri-chat-1-line"></i></h4>
              <h6>300</h6>
            </div>
            <div id="share" class="feature">
              <h4><i class="ri-send-plane-line"></i></h4>
            </div>
            <div id="save" class="feature">
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
              <button id="follow">follow</button>
            </div>
            <p>${elem.description}</p>
          </div>
        </div>`;
});


section.innerHTML = sum


