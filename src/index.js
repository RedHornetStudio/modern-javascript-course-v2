// import getTodos from './getTodos';

// getTodos('luigi.json').then(data => {
//     console.log('promise 1 resolved', data);
//     return getTodos('mario.json');
// }).then(data => {
//     console.log('promise 2 resolved', data);
//     return getTodos('shaun.json');
// }).then(data => {
//     console.log('promise 3 resolved', data);
// }).catch(err => {
//     console.log('promise rejected', err);
// });

///////////////////////////////////// fetch api

// fetch('assets/json/todos/luigi.json').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
//     return fetch('assets/json/todos/mario.json');
// }).then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
//     return fetch('assets/json/todos/shaun.json')
// }).then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('promise rejected', err.message);
// });

///////////////////////////////// fetch api with async and await

import getTodos from './getTodos';

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));