// function greet() {
//     console.log('Hello world');
// }

// const speak = function() {
//     console.log('good day');
// };

// const talk = () => {
//     console.log('talking');
// }

// greet();
// console.dir(greet);
// console.log(greet);
// speak();
// console.dir(speak);
// console.log(speak);
// talk();
// console.dir(talk);
// console.log(talk);

const greet = (name, time) => {
    console.log(Boolean(!name));
    console.log(Boolean(!time))
    if(!name && !time) {
        console.log('Hello');
    } else if(!name) {
        console.log(`Good ${time}`);
    } else if(!time) {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Good ${time} ${name}`);
    }
};

greet();
greet('Mario', 'day', 'hhh');
greet(null, 'night');
greet('Luigi');

const price = (items, tax) => {
    let total = 0;
    items.forEach(element => {
        total += element + element * tax;
    });
    return total
};

console.log(price([100, 1000], 0.2));