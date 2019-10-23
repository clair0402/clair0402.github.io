

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
    var randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Elephant) {
        return new Elephant(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof Horse) {
        return new Horse(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof Monkey){
        return new Monkey(generateRandomName(), generateRandomAge());
    }
}


function onLoad() {
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  var hasSavedAnimal = false;
  if (animal === null)
  {
    //if there is no saved animal, the button should display the Save Animal text
    document.getElementById("button-storage").textContent = "Save Animal";

    //if there is no saved animal, we generate one
    animal = generateRandomAnimal();
    console.log(animal);
  }
  else
  {
    //if there is a saved animal, the button should display Clear Animal text
    document.getElementById("button-storage").textContent = "Clear Animal";

    //change the boolean to note that this animal has been saved

    console.log(animal);
    localStorage.removeItem("savedAnimal");
  }
  localStorage.setItem("savedAnimal", JSON.stringify(animal));

  // generate a random animal when the document opens

  // update the page based on the animal properties
  document.getElementById("animal-name").textContent = animal.name ;
  document.getElementById("animal-age").textContent = animal.age ;
  document.getElementById("animal-img").setAttribute("src", animal.image)

};
