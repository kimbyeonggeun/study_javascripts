const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable
for (let i of animals) {
  console.log(`${i}`);
}

const animals_obj = [
  animals,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
  // cars[0];
}
//car;
cars.forEach((car) => {
  console.log(`${car}`);
});

//forEach
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Arrow Function
let arrowFuntion = (element, index) => {
  console.log(`${element}, index ${index}`);
};
array1.forEach(arrowFuntion);

//Normal Function
function normalFunction(element) {
  console.log(element);
}
