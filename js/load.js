function pageLoaded() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    console.log('[Pacman] Level Complete! 100/100');
    document.getElementById('main').style.display = 'block';
    document.getElementById('pacman-loading').style.display = 'none';
}