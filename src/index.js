import getWeather from './getWeather';
import updateUI, { hide, show } from './updateUI';

const changeLocation = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

changeLocation.addEventListener('submit', e => {
    e.preventDefault();

    getWeather(e.target.city.value)
        .then(data => {
            if(data) {
                changeLocation.reset();
                show(card);
                updateUI(data, details);
            } else {
                hide(card)
            }
        }).catch(err => {
            hide(card);
            console.log(err);
        });
});