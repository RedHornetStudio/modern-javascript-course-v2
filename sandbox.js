// const para = document.querySelector('p.error');

// console.log(para);

// const paras = document.querySelectorAll('p');

// console.log(paras);

// paras.forEach(element => {
//     console.log(element);
// });

// const div = document.querySelector('div');
// console.log(div.innerText);

// const content = document.querySelector('.content');

// content.innerHTML += '<h1>this is content</h1>';

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk/');
// console.log(link.getAttribute('href'));

// const paragraphs = document.querySelectorAll('.test > p');
// console.log(paragraphs);

// paragraphs.forEach(element => {
//     if(element.textContent.includes('error')) {
//         element.classList.add('error');
//     } else if(element.textContent.includes('success')) {
//         element.classList.add('success');
//     }
// });

//////////////////////////////////////////////////////////////////

const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
});

const button = document.querySelector('.prepend');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'new todo';
    ul.prepend(li);
});

const button2 = document.querySelector('.append');

button2.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'new todo';
    ul.append(li);
});

//////////////////////////////////////////////

const li = document.querySelector('li');

li.addEventListener('copy', (e) => {
    console.log('copy event in li', e.target);
});

ul.addEventListener('copy', e => {
    console.log('copy event in ul', e.target);
});