// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  }); 

function destructivelyAppendCat(name){
      cats.push(name);
      return cats;
  }
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    const coolCats = [...cats, name];
    return coolCats;
}
appendCat("Broom");

function prependCat(name){
    const boolCats = [name, ...cats];
    return boolCats;
}
prependCat("Arnold");

function removeLastCat(){
    const toolCats = cats.slice(0,2);
    return toolCats;
}
removeLastCat();

function removeFirstCat(){
    const goolCats = cats.slice(1);
    return goolCats;

}