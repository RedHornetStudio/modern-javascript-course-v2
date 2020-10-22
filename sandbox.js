const form = document.querySelector('form');
let patternUsername = /^[a-zA-Z]+\S*$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e);
    // console.dir(e.target);
    // console.dir(e.target.username);

    console.log(e.target.username.value);
    console.log(e.target.username.value.trim());

    if(patternUsername.test(e.target.username.value.trim())) {
        console.log('string matches the pattern');
    } else {
        console.log('string doesn\'t match the pattern');
    }

    let patternPassportNumber = /^[A-Z0-9]+$/;
    console.log(e.target['passport-number'].value.replace(/ /g, '').toUpperCase());
    if(patternPassportNumber.test(e.target['passport-number'].value.replace(/ /g, '').toUpperCase())) {
        console.log('passport number is correct');
    } else {
        console.log('passport number isn\'t correct');
    }
});

form.username.addEventListener('input', e => {
    console.log('aaaaaaaa');
    if(patternUsername.test(e.target.value.trim())) {
        e.target.classList.remove('red');
        e.target.classList.add('green');
    } else {
        e.target.classList.remove('green');
        e.target.classList.add('red');
    }
});