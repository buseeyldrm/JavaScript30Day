const pressed=[]; //boş dizi oluşturur.Klavyeden girilen harfler kaydeder.
const secretCode='javascript';

window.addEventListener('keyup',(e)=>{
    console.log(e.key);
    pressed.push(e.key); // girilen her harfi ekler
    pressed.splice(-secretCode.length-1,pressed.length-secretCode.length); //pressed dizisinin boyutunu secretCode uzunluğundan fazla tutmamak için elemanları bölme işlemi yapar ve siler.

    if(pressed.join('').includes(secretCode)){ //secretCode ile klavyeden yazılan harfleri karşılaştırır.
        console.log('DING DING!');
        cornify_add(); //tanımlanan js de eğer girilen değer aynı ise komik çıktılar verir.
    }
    console.log(pressed);
})