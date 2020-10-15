function greet() {
    console.log('Hello world');
}

const speak = function() {
    console.log('good day');
};

const talk = () => {
    console.log('talking');
}

greet();
console.dir(greet);
console.log(greet);
speak();
console.dir(speak);
console.log(speak);
talk();
console.dir(talk);
console.log(talk);