

function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Elephant";
  this.image = "elephant.png";
}

function Horse(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Horse";
  this.image = "horse.png";
}

function Monkey(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Monkey";
  this.image = "monkey.png";
}


var animals = [new Elephant(), new Horse(), new Monkey()];
var animalName = ["Amy", "Jame", "Jane", "Simba", "Hans"];


function generateRandomIndex(maxIndex){
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName(){
    var randomIndex = generateRandomIndex(animalName.length);
    return animalName[randomIndex];
}

function generateRandomAge(){
    var randomIdx = generateRandomIndex(5);
    return randomIdx;
}

function generateRandomAnimal(){
    var randomIdx = generateRandomIndex(animals.length);
    console.log("index: "+randomIdx);
    var randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Elephant) {
        console.log("elephant");
        return new Elephant(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof Horse) {
        console.log("horse:" + new Horse(generateRandomName(), generateRandomAge()));
        return new Horse(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof Monkey) {
        console.log("monkey");
        return new Monkey(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-name").textContent = animal.name ;
  document.getElementById("animal-age").textContent = animal.age ;
  document.getElementById("animal-img").setAttribute("src", animal.image)

};
