function debounce(func, wait = 20, immediate = true) { //debounce fonk tekrarlanan işlemlerş kontrol atına almak için kullanılır
    //func parametresi:gecikmeli olarak çağrılacak olan işlevi temsil eder.
    //wait:çağrıların arasındaki bekleme süresi
    //immediate: işlevin ne zaman yapacağını gösterir.
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImages.forEach(sliderImage => {
        //Görüntünün Yarısı
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        //Görüntünün alt kısmı
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        }
        else {
            sliderImage.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));