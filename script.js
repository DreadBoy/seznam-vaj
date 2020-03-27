(function () {
    document.addEventListener('click', e => {
        if(!e.target.classList.contains('js-player'))
            return;
        if(e.target.paused)
            e.target.play();
        else
            e.target.pause();
    });
    const cfg = {
        controls: ['play', 'settings', 'airplay', 'fullscreen'],
        quality: {default: 480, options: [480, 720, 1080]},
        speed: { selected: 1, options: [0.25, 0.5, 1] },
    };
    Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p, cfg));
})();
