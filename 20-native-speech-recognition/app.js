//SpeechRecognition:Web konuşma API'sı
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'tr-TR';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results) //dizi oluşturma
        .map(result => result[0])
        .map(result => result.transcript)
        .join(''); //dizi elemanlarının arasına ayraç koyma

    const poopScript = transcript.replace(/poop|poep|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    const unicornScript = transcript.replace(/unicorn|eenhoorn/gi, '🦄'); //seslenildiğinde resim çıkar.
    p.textContent = unicornScript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});

//end: konuşma tanıma bağlantısı kesildiğinde tetiklenir.
recognition.addEventListener('end', recognition.start);

recognition.start();
