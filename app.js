let cardContainers = [...document.querySelectorAll(".card-container")];
let cardContainers2 = [...document.querySelectorAll(".latest-english-song-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    })
})


cardContainers2.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[cardContainers.length + i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[cardContainers.length + i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});

// let songs = [
//     songName
// ]

let audioElement = new Audio("audio/let-me-down-slowly.mp3");

let play = document.getElementById("play");

let progressBar = document.getElementById("progress-bar");

// AUDIO PLAY

play.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        play.classList.remove("fa-play-circle")
        play.classList.add("fa-pause-circle")
    } else {
        audioElement.pause();
        play.classList.remove("fa-pause-circle")
        play.classList.add("fa-play-circle")
    }
});

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progressBar.value = progress
    currentTimeText.innerText = formatTime(audioElement.currentTime);


});

audioElement.addEventListener("loadedmetadata", () => {
    const maxDuration = formatTime(audioElement.duration)
    maxTimeText.innerText = maxDuration;
});

progressBar.addEventListener("change", () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100
})

let currentTimeText = document.getElementById("current-time");
let maxTimeText = document.getElementById("max-time");

// Format time in MM:SS format
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// const heartIcon = document.getElementsByClassName("heart-icon");
const heartIcons = document.querySelectorAll(".fa-heart");


// for (let i = 0; i < heartIcon.length; i++) {
//     heartIcon.addEventListener("click", function () {
//         heartIcon.classList.toggle("clicked");
//     });
// }

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        this.classList.toggle("clicked");
    });
}
