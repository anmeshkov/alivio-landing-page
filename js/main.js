// MOBILE NAV
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavButtonIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButtonIcon.addEventListener('click', function () {
    mobileNavButtonIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scrol');
});

// VIDEO
const videoButton = document.querySelector('#story-video-btn');
const videoButtonIcon = document.querySelector('#story__video__button-icon');
const videoFile = document.querySelector('#video-story');
const videoOverlay = document.querySelector('#overlay');


videoButton.addEventListener('click', function() {

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        };
    };

    if (videoFile.paused) {
        videoFile.play();
        videoButtonIcon.src = "./img/pause-white.svg";

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.pause();
        videoButtonIcon.src = "./img/play-white.svg";
    };
});

// AOS (Animate On Scroll Library)
AOS.init({
    once: true
});