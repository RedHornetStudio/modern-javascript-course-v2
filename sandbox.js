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