const setName = name => {
    localStorage.setItem('name', name);
};

const setAge = age => {
    localStorage.setItem('age', age);
};

const storeTodos = todos => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
];

console.log(JSON.parse(localStorage.getItem('todos')));
