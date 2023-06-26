// SLLIDER NEXT AND PREVIOUS BUTTON

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


// CHANGING HEART COLOR ON CLICK
const heartIcons = document.querySelectorAll(".fa-heart");


for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        this.classList.toggle("clicked");
    });
}


// SONG CONTROLS

let songIndex = 1;
let queueSongs = Array.from(document.getElementsByClassName("queue-songs"))
let playerSong = document.getElementById("player-song-information")
let queueSongsPlay = Array.from(document.getElementsByClassName("queue-song-cover-body"))
// let queuePlayIcon = Array.from(document.getElementsByClassName("queue-play"))


let songs = [
    { songName: "Let Me Down Slowly", singer: "Alec Benjamin", filePath: "audio/song1.mp3", coverPath: "img/let-me-down-slowly.jpeg" },
    { songName: "I Leave Again", singer: "Petit Biscuit", filePath: "audio/song2.mp3", coverPath: "img/i-leave-again.jpg" },
    { songName: "Subhanallah", singer: "Shilpa Rao", filePath: "audio/song3.mp3", coverPath: "img/subhanallah.jpg" },
    { songName: "We Don't talk Anymore", singer: "Charlie puth", filePath: "audio/song4.mp3", coverPath: "img/we-dont-talk-anymore.jpeg" },
    { songName: "Let Me Down Slowly", singer: "Alec Benjamin", filePath: "audio/song1.mp3", coverPath: "img/let-me-down-slowly.jpeg" },
    { songName: "I Leave Again", singer: "Petit Biscuit", filePath: "audio/song2.mp3", coverPath: "img/i-leave-again.jpg" },
    { songName: "Subhanallah", singer: "Shilpa Rao", filePath: "audio/song3.mp3", coverPath: "img/subhanallah.jpg" },
    { songName: "We Don't talk Anymore", singer: "Charlie puth", filePath: "audio/song4.mp3", coverPath: "img/we-dont-talk-anymore.jpeg" }, { songName: "Let Me Down Slowly", singer: "Alec Benjamin", filePath: "audio/song1.mp3", coverPath: "img/let-me-down-slowly.jpeg" },
    { songName: "I Leave Again", singer: "Petit Biscuit", filePath: "audio/song2.mp3", coverPath: "img/i-leave-again.jpg" },
    { songName: "Subhanallah", singer: "Shilpa Rao", filePath: "audio/song3.mp3", coverPath: "img/subhanallah.jpg" },
    { songName: "We Don't talk Anymore", singer: "Charlie puth", filePath: "audio/song4.mp3", coverPath: "img/we-dont-talk-anymore.jpeg" },
]



// IMFORMATION IN QUEUE SONG LIST
queueSongs.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("h5")[0].innerText = songs[i].songName;
    element.getElementsByTagName("h6")[0].innerText = songs[i].singer;
})


// TO CHANGE THE ICONS BACK TO PLAY F ANY OTHER SONG IS PLAYING
function makeAllPlays() {
    Array.from(document.getElementsByClassName("queue-play")).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

// PLAYING QUEUE SONGS AND CHANGING ICONS ACCORDINGLY
queueSongsPlay.forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        // console.log(songIndex)
        // audioElement.src = `audio/song${songIndex}.mp3`
        // audioElement.play();
        let queuePlayIcon = e.currentTarget.getElementsByClassName("queue-play")[0];
        // queuePlayIcon.classList.toggle("fa-play");
        // queuePlayIcon.classList.toggle("fa-pause");

        if (audioElement.paused) {
            audioElement.src = `audio/song${songIndex}.mp3`;
            audioElement.play();
            queuePlayIcon.classList.remove("fa-play");
            queuePlayIcon.classList.add("fa-pause");
            play.classList.remove("fa-play-circle");
            play.classList.add("fa-pause-circle");
        } else {
            console.log(songIndex)
            audioElement.pause();
            queuePlayIcon.classList.remove("fa-pause");
            queuePlayIcon.classList.add("fa-play");
            play.classList.remove("fa-pause-circle");
            play.classList.add("fa-play-circle");
        }
        document.getElementById("player-song-name").innerHTML = songs[songIndex - 1].songName
        document.getElementById("player-singer-name").innerHTML = songs[songIndex - 1].singer
        document.getElementById("player-song-cover-img").src = songs[songIndex - 1].coverPath
        // play.classList.remove("fa-play-circle")
        // play.classList.add("fa-pause-circle")
    });
});

// PLAY PAUSE PLAYER BUTTON
queueSongsPlay[0].addEventListener("click", () => {
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




// NEXT SONG CONTROL BUTTON 
document.getElementsByClassName("fa-forward")[0].addEventListener("click", () => {
    if (songIndex >= 4) {
        songIndex = 1;
    }
    else {
        songIndex += 1
    }
    audioElement.src = `audio/song${songIndex}.mp3`
    audioElement.play();
    play.classList.remove("fa-play-circle")
    play.classList.add("fa-pause-circle")
    document.getElementById("player-song-name").innerHTML = songs[songIndex - 1].songName
    document.getElementById("player-singer-name").innerHTML = songs[songIndex - 1].singer
    document.getElementById("player-song-cover-img").src = songs[songIndex - 1].coverPath
})

// PREVIOUS SONG CONTROL BUTTON
document.getElementsByClassName("fa-backward")[0].addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 4;
    }
    else {
        songIndex -= 1
    }
    console.log(songIndex)
    audioElement.src = `audio/song${songIndex}.mp3`
    audioElement.play();
    play.classList.remove("fa-play-circle")
    play.classList.add("fa-pause-circle")
    document.getElementById("player-song-name").innerHTML = songs[songIndex - 1].songName
    document.getElementById("player-singer-name").innerHTML = songs[songIndex - 1].singer
    document.getElementById("player-song-cover-img").src = songs[songIndex - 1].coverPath
})



// AUDIO AND PROGRESS BAR FUNCTIONING
let audioElement = new Audio("audio/song1.mp3");
let play = document.getElementById("play");
let progressBar = document.getElementById("progress-bar");
let currentTimeText = document.getElementById("current-time");
let maxTimeText = document.getElementById("max-time");


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

// PROGRESS BAR RUNING ACCORDING TO SONG TIME
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progressBar.value = progress
    currentTimeText.innerText = formatTime(audioElement.currentTime);


});

// SONG MAX DURATION INPUT
audioElement.addEventListener("loadedmetadata", () => {
    const maxDuration = formatTime(audioElement.duration)
    maxTimeText.innerText = maxDuration;
});

// SONG CURRENT TIME INPUT
progressBar.addEventListener("change", () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100
})

// Format time in MM:SS format
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

