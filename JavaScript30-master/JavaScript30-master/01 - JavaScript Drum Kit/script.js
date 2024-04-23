
document.addEventListener('keydown', playSound);

function playSound(e) {

    const selectedAudio= document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if (!selectedAudio) return;

    const selectedDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);

    selectedDiv.classList.add('playing');

    selectedAudio.currentTime = 0;
    selectedAudio.play();

    selectedAudio.addEventListener('ended', function() {
        selectedDiv.classList.remove('playing');
    });
}