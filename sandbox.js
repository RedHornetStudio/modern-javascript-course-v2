const numbers = [20, 30, 25, 10, 5, 60];

let newNumbers = numbers.filter(number => number > 20);
console.log(newNumbers);

let halfNumbers = numbers.map(number => number / 2);
console.log(halfNumbers);

let countOver20 = numbers.reduce((acc, curr) => {
    if(curr > 20) {
        acc++
    }
    return acc;
}, 0);
console.log(countOver20);

let firstScoreOver20 = numbers.find(number => number > 20);
console.log(firstScoreOver20);

numbers.sort((a, b) => b -a);
console.log(numbers);
