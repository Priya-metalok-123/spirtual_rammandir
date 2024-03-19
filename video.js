// let slides = document.querySelectorAll('.screen-box');
// let index = 0;

// function next(){
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// }

// function back(){
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
// }



// let slides = document.querySelectorAll('.screen-box');
// let index = 0;

// function next() {
//     pauseCurrentVideo();
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
//     playCurrentVideo();
// }

// function back() {
//     pauseCurrentVideo();
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
//     playCurrentVideo();
// }

// function pauseCurrentVideo() {
//     let currentVideo = slides[index].querySelector('video');
//     currentVideo.pause();
//     currentVideo.currentTime = 0; // Reset video playback position
// }

// function playCurrentVideo() {
//     let currentVideo = slides[index].querySelector('video');
//     currentVideo.play();
// }




let slides = document.querySelectorAll('.screen-box');
let index = 0;
let intervalId;

function startCarousel() {
    intervalId = setInterval(next, 5000); 
}

function stopCarousel() {
    clearInterval(intervalId);
}

function next() {
    pauseCurrentVideo();
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    playCurrentVideo();
}

function pauseCurrentVideo() {
    let currentVideo = slides[index].querySelector('video');
    currentVideo.pause();
    currentVideo.currentTime = 0; 
}

function playCurrentVideo() {
    let currentVideo = slides[index].querySelector('video');
    if (currentVideo.paused) { 
        currentVideo.play();
    }
}
playCurrentVideo(); 

startCarousel(); 
