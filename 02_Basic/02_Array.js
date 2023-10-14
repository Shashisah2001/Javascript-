const Mcu = ["IronMan","Thor","Spiderman","Hulk"]
const Dcu = ["Superman","Batman","The flash"]
Mcu.push(Dcu);
//console.log(Mcu);

const allSuperhero = Mcu.concat(Dcu)
//console.log(allSuperhero);

const allHero = [...Mcu,...Dcu]
console.log(allHero);

const hero = allSuperhero.flat(Infinity) // combimed all the stored data 
console.log(hero);

console.log(Array.isArray("Hulk"));
console.log(Array.from("Hulk"));
console.log(Array.of("Hulk","Dcu","Mcu"));