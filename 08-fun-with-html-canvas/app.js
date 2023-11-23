const canvas = document.querySelector('#draw');


const ctx = canvas.getContext('2d'); //HTML nesneleri içinde olan,yollar,kutular,daireler,resimler daha fazlasını çizmek için bir çok özelliği ve metodu olan gömmedir
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55'; //canvas üzerine çizilen şekillerin rengini belirler
ctx.lineJoin = 'round'; //lineJoin:iki çizginin keşiştiği noktada ne tür birleşim olacağını belirler.Round değeri: keşiştiği köşelerin yuvarlak görünümme sahip olmasını sağlar.
ctx.lineCap = 'round'; //çizgilerin uçları için stil belirler.Round çizgilerin uçlarının yuvarlak olmasını sağlar.
ctx.lineWidth = '50'; //canvas üzerinde çizilecek çizgilerin kalınlığını 50 birim olarak ayarlar.
//ctx.globalCompositeOperation='multiply'; //üst üstüne gelinen renkler karışır.Çakışan renkler daha koyu renk alır.


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;  //yön

function draw(e) {
    console.log(e);
    //mouse tıklanmadığında fonksiyonu durdurur.
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue},100%,50%)`; //çizginin rengini değiştirir.
    ctx.beginPath(); //çizim yolunu başlatır

    ctx.moveTo(lastX, lastY); //konum bilgisi

    ctx.lineTo(e.offsetX, e.offsetY);//önceki konumdan geçerli konuma çizme
    ctx.stroke(); //stroke():çizme
    [lastX, lastY] = [e.offsetX, e.offsetY]; //konum güncellemesi yapar
    hue++; //değeri artırır.

    if (hue >= 360) {
        hue = 0;
    }
    //ctx 70'den büyükse yön çevrilir ya da 1'den küçükse yön değişir.
    if (ctx.lineWidth >= 70 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    //yönün ne olduğuna bağlı olarak çizginin genişliğini artırma ya da azaltma yapıyoruz.
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw); //mouse hareket ettiğinde çizim çalışacak
canvas.addEventListener('mousedown', () => isDrawing = true); //mouse tıklandığında çizim yapılabilir hale gelir.
canvas.addEventListener('mouseup', () => isDrawing = false); //mouse tuvalden kaldırıldığında çizim durur.
canvas.addEventListener('mouseout', () => isDrawing = false); //tuval sınırlarının dışında durmasını sağlar.


