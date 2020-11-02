// const setName = name => {
//     localStorage.setItem('name', name);
// };

// const setAge = age => {
//     localStorage.setItem('age', age);
// };

// const storeTodos = todos => {
//     localStorage.setItem('todos', JSON.stringify(todos));
// };

// const todos = [
//     {text: 'play mariokart', author: 'shaun'},
//     {text: 'buy some milk', author: 'mario'},
//     {text: 'buy some bread', author: 'luigi'}
// ];

// console.log(JSON.parse(localStorage.getItem('todos')));

import getWeather from './getWeather';
import updateUI, { hide, show } from './updateUI';
import { setDefaultCityInLocalStorage, getDefaultCityFromLocalStorage } from './localStorage';

const changeLocation = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const weatherIcon = document.querySelector('.icon img');
const daytimePicture = document.querySelector('.time');

const updateApplication = city => {
    getWeather(city)
        .then(data => {
            if(data) {
                changeLocation.reset();
                show(card);
                updateUI(data, details, weatherIcon, daytimePicture);
                setDefaultCityInLocalStorage(data);
            } else {
                hide(card)
            }
        }).catch(err => {
            hide(card);
            console.log(err);
        });
};

if(getDefaultCityFromLocalStorage()) {
    updateApplication(getDefaultCityFromLocalStorage());
}

changeLocation.addEventListener('submit', e => {
    e.preventDefault();

    updateApplication(e.target.city.value.trim());
});