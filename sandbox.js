const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e);
    // console.dir(e.target);
    // console.dir(e.target.username);

    console.log(e.target.username.value);
    console.log(e.target.username.value.trim());
    let patternUsername = /^[a-zA-Z]+\S?$/;

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