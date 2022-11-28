(function () {
    const videos = Array.from(document.querySelectorAll("video"));
    function togglePlay(e) {
        if(e.target.tagName.toLowerCase() === "video") {
            if(e.target.paused) {
                videos.forEach(video => video.pause())
                e.target.play();
            }
            else
                e.target.pause();
        }
    }
    document.addEventListener('click', togglePlay);
})();
