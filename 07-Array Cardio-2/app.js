const people=[
    {name:'Wes',year:1988},
    {name:'Kait',year:1986},
    {name:'Irv',year:1970},
    {name:'Lux',year:2015}
];

const comments=[
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
//some():en az bir dizi üyesinin tanımlanan koşulu sağlayıp sağlamadığını gösterir.
//Array.prototype.some():en az 1 kişi 19 yaşında veya daha büyük mü?
const isAdult=people.some(person=>((new Date()).getFullYear())-person.year>=19);
console.log(isAdult); //true,false döner;
console.log({isAdult}); //obje olarak döner

//Array.prototype.every():herkes 19 yaşında veya daha büyük mü?
const allAdult=people.every(person=>((new Date()).getFullYear())-person.year);
console.log({allAdult});

//Array.prototype.find(): find yalnızca aradığını return eder, 823423 id sahip yorumu bul
const comment=comments.find(comment=>comment.id===823423);
console.log(comment);

//Array.prototype.findIndex() :823423 is'sine sahip yorumu bul ve sil
const index=comments.findIndex(comment=>comment.id===823423);
console.log(index);

//comments.splice(index,1);
const newComments=[
    ...comments.slice(0,index),
    ...comments.slice(index+1)
];
console.log(newComments);
console.log(comments)