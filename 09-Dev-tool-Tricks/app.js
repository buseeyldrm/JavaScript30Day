const dogs=[
    {name:'Snickers',age:2},
    {name:'Hugo',age:8},
]

function makeGreen(){
    const p=document.querySelector('p');
    p.style.color='#BADA55';
    p.style.fontSize='50px';
}

//Regular
console.log("Hello cats!");

//Interpolated
console.log("Hello I am a %s string!", "💩"); // %s:sonradan gelen emojiyi metin içine yerleştirir.

//Style  %c : konsol çıktısındaki bir sonraki özel mesajın nasıl biçimlendirileceğini belirtir.
console.log("%c I am some great text","font-size:40px; background:green; ;color:orange");

//Warning : sarı renkli uyharı mesajı verır
console.warn("OH NOOO!");

//Error :kırmızı renkle uyarı verir.
console.error("SHİT!");

//Info :bilgilendirme mesajıdır.
console.info("Crocodiles eat 3-4 people per year"); 

//Testing ::Seçilen p elementinde sınıf listesinde 'ouch' sınıfı olup olmadığını kontrol eder.Eğer yoksa hata mesajı verir.
const p=document.querySelector('p');
console.assert(p.classList.contains('ouch'),'That is wrong !');

//Clearing :konsolu temziler.
//console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p); //daha ayrıntı gösterir.

//Grouping Together
dogs.forEach(dog=>{  //isimler gruplaştırır.
    console.groupCollapsed(`${dog.name}`); //Oluşturduğu grubun başlığı
    console.log(`This is ${dog.name}`); //isim
    console.log(`${dog.name} is ${dog.age} years old`); //isim ve yaş bilgisi
    console.log(`${dog.name} is ${dog.age*7} dog years old`);
    console.groupEnd(`${dog.name}`); //grubu bitirir.
})

const lessons=[
    {name:'Türkçe',lessonTime:6},
    {name:'Matematik',lessonTime:5},
    {name:'Coğrafya',lessonTime:2},
    {name:'Fizik',lessonTime:4},
    {name:'Kimya',lessonTime:4}
]
lessons.forEach(lesson=>{
console.groupCollapsed(`${lesson.name}`);
console.log(`This is ${lesson.name}`);
console.log(`${lesson.name} lessons are  ${lesson.lessonTime} hours per week`);
console.groupEnd(`${lesson.name}`);
})

//Counting : girilen etiketin kaç tane olduğunu sayar.
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');


//Timing
console.time('fetching data'); //zamanı başlatır ve fetching data adında bir zamanlayıcı oluşturur.
fetch('https://api.github.com/users/wesbos') //API çeker
.then(data=>data.json()) //API 'yi JSON formatına dönüştürür.
.then(data=>{
    console.timeEnd('fetching data');
    console.log(data);  //veri aldıktan sonra zamanlayıcı durur.Geçen süreyi konsola yazdırır.
}); 
console.table(dogs); //girilen köpekleri tablo olarak konsola yazdırır.