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

//////////////////////////////////////////////////////

// const greet = (name, time) => {
//     console.log(Boolean(!name));
//     console.log(Boolean(!time))
//     if(!name && !time) {
//         console.log('Hello');
//     } else if(!name) {
//         console.log(`Good ${time}`);
//     } else if(!time) {
//         console.log(`Hello ${name}`);
//     } else {
//         console.log(`Good ${time} ${name}`);
//     }
// };

////////////////////////////////////////////////////////

// greet();
// greet('Mario', 'day', 'hhh');
// greet(null, 'night');
// greet('Luigi');

// const price = (items, tax) => {
//     let total = 0;
//     items.forEach(element => {
//         total += element + element * tax;
//     });
//     return total
// };

// console.log(price([100, 1000], 0.2));

//////////////////////////////////////////////////////////

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(element => {
//     console.log(element);
// });

class MyArray {
    constructor(...args) {
        this.length = args.length;
        for(let i = 0; i < args.length; i++) {
            this[i] = args[i];
        }
    }
    push(...args) {
        for(let i = 0; i < args.length; i++) {
            this[this.length + i] = args[i];
        }
        this.length += args.length;
    }
    pop() {
        this.length--;
        delete this[this.length];
    }
    forEach(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i);
        }
    }
    filter(callback) {
        let filteredArray = new MyArray();
        for(let i = 0; i < this.length; i++) {
            if(callback(this[i], i)) {
                filteredArray.push(this[i]);
            }
        }
        return filteredArray;
    }
}

let myArray = new MyArray('mario', 'luigi', 'ryu', 'shaun', 'chun-li');
console.log(myArray);
myArray.pop();
myArray.pop();
console.log(myArray);
myArray.push(30, 11, 5, 11.1);
console.log(myArray);

myArray.forEach((element, index) => {
    console.log(element, index);
});

let fillteredArray = myArray.filter((element, index) => {
    return element > 11;
});

console.log(fillteredArray);