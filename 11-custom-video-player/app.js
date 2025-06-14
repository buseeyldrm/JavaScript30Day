const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');


function togglePlay() {
    //video duraklatma ve başlatma
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() { //video başladığında icon değişir.
    const icon = this.paused ? '►' : '❚❚';  //paused:duraklatıldı
    console.log(icon);
    toggle.textContent = icon; //iconlar arası yer değiştirme
}

function skip() {  //ne kadar ilerleyeceğini ayarlama
    video.currentTime += parseFloat(this.dataset.skip);

}
function handleRangeUpdate() {
    video[this.name] = this.value;
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false; //ileri geri sarma
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);