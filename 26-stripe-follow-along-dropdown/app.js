const triggers = document.querySelectorAll('.cool li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

//mouse ile üstüne geldiğinde çalışır.
function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    /*
    Bu metot, bir elementin ekran üzerindeki yerini, genişliğini, 
    yüksekliğini, sol ve üst kenarlarının konumunu 
    ve diğer geometrik özelliklerini olmamıza olanak sağlar.
    */
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top, //nav'ın koordinatları ile çıkarılması lazım nav'a ekleme olduğunda koordinatlar karışır.Beyaz arka plan özelliği de kayar.
        left: dropdownCoords.left - navCoords.left,
    };

    //setProperty: metodu, style özelliği aracılığıyla bir HTML öğesinin CSS stil özelliklerine erişir ve bu özelliklerin değerlerini belirler
    //coords değişkenindeki değerleri width,height değerleine atar.
    //px verilmezse değerler alınmaz arka plan boyutu aynı kalır.
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    //dropdown menünün sol üst köşesinin sayfa içindeki konumunu belirler.
    background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`);
}

//Mouse hareketi ile ayrıldığında çalışır.
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));