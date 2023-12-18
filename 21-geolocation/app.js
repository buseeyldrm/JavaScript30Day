   
   const arrow=document.querySelector('.arrow');
   const speed=document.querySelector('.speed-value');
        // bu fonksiyon konum bilgisini sürekli izler
        // watchPosition() fonksiyonu, konum bilgisi her güncellendiğinde çağrılan bir geri arama fonksiyonu ile birlikte kullanılır.
        // güncellenmiş konum verileri data adlı bir değişkene atanır
        navigator.geolocation.watchPosition((data) => {
            console.log(data);
            //coords:konum verilerini içerir.
            speed.textContent = data.coords.speed;
            //heading:cihazın hareket yönünü derece cinsinden verir.
            arrow.style.transform = `rotate(${data.coords.heading}deg)`;
        }, (err) => {
            console.log(err); //konum bilgisi izni verilmediğinde konsola yazdırır.
        });