const animals = ["dog", "cat", "bird", "fish", "lizard"];

for(let i = 0; i<animals.length; i++){
    console.log(`${animals[i]}`);
}

// for iterable
for(let i of animals){
    console.log(`${i}`)
}