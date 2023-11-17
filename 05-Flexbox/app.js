let panel = document.querySelectorAll('.panel');

panel.forEach(panels => {
    panels.addEventListener('click', () => {
        for (var i = 0; i < panel.length; i++) {
            if (panel[i] != panels) {  //tıklanan panelle forun döndüğü panel eşit değilse
                panel[i].classList.remove('open'); //paneli kapatır
                panel[i].classList.remove('open-active'); //1-3 deki yazıları yok eder
            }
            else {
                panels.classList.toggle('open');  //toggle ile open aktiflenir
                panels.classList.toggle('open-active');  //yazı aktiflenir.
            }
        }
    })
})