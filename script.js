// Play/Pause music
function playPauseSong() {
    let song = document.getElementById("song");
    if(song.paused) song.play();
    else song.pause();
}

// Show specific video when gift clicked
function openVideo(id) {
    let videos = document.querySelectorAll('.video-wrap');
    videos.forEach(v => v.style.display = "none"); // hide all
    document.getElementById(id).style.display = "block"; // show selected
}

// Photo gift unwrap
function openPhotoGift() {
    let photo = document.getElementById("finalPhoto");
    photo.style.width = "400px";
    photo.style.opacity = "1";
    document.getElementById("giftWrap").querySelector("button").style.display = "none";
}
