const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

let i = 0;
while(i < names.length) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
    i++;
}

let scores = [50, 30, 10, 0, 100, 30, 60];

for(let i = 0; i < scores.length; i++) {
    if(scores[i] === 0) {
        continue;
    }

    if(scores[i] === 100) {
        console.log('you get maximum score', scores[i]);
        break;
    }

    console.log('you score is', scores[i]);
}