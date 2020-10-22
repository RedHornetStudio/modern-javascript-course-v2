const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

console.dir(result);

form.addEventListener('submit', e => {
    e.preventDefault();

    let correct = 0;
    const userAnswers = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value];

    userAnswers.forEach((element, index) => {
        if(element === correctAnswers[index]) {
            correct += 1;
        }
    });
    
    scrollTo(0, 0);
    result.classList.remove('d-none');
    // result.children[0].children[0].children[0].textContent = correct / userAnswers.length * 100 + '%';
    result.querySelector('span').textContent = correct / userAnswers.length * 100 + '%';

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = output + '%';
        if(output === correct / userAnswers.length * 100) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});