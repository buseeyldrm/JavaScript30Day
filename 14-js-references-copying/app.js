
//string,number ve boolean
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes";
let name2 = name;
console.log(name, name2);
name = "Bos";
console.log(name, name2);

//bir array var
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

//kopyası için
const team = players;
console.log(players, team);

team[3] = "Lux";

//kopyasını alır
const team2 = players.slice();

//yeni array oluşturup ve eskisiyle birleştirme
const team3 = [].concat(players);

//veya yeni ES6 Spread'i kullan
const team4 = [...players];
team4[3] = "heee heee";
console.log(team4);

const team5 = Array.from(players);


const person = {
    name: "Wes Bos",
    age: 80
};

//kopyası
const captian = person;
captian.number = 99;

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

const cap3 = { ...person };

const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.developer"
    }
};

console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));