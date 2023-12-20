const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    //console.log(e.pageX); // tıklandığında x eksenindeki noktayı verir
    startX = e.pageX - slider.offsetLeft; //arada boşluk varsa dengeler.
    // console.log(startX);
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');

});


slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log({x,startX});
    const walk = (x - startX) * 3;
    // console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
})

