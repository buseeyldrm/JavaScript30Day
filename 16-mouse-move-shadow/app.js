const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    console.log(xWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 blue,
    ${xWalk * -1}px ${yWalk}px 0 blueviolet,  
    ${yWalk}px ${xWalk * -1}px 0 yellow,
    ${yWalk * -1}px ${xWalk}px 0 green
    `;
}
hero.addEventListener('mousemove', shadow);