import getWeather from './getWeather';
import updateUI, { hide, show } from './updateUI';
import updateWeatherIcon from './updateWeatherIcon';
import updateDaytimePicture from './updateDaytimePicture';

const changeLocation = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const weatherIcon = document.querySelector('.icon img');
const daytimePicture = document.querySelector('.time');

changeLocation.addEventListener('submit', e => {
    e.preventDefault();

    getWeather(e.target.city.value.trim())
        .then(data => {
            if(data) {
                changeLocation.reset();
                show(card);
                updateUI(data, details);
                updateWeatherIcon(data, weatherIcon);
                updateDaytimePicture(data, daytimePicture);
            } else {
                hide(card)
            }
        }).catch(err => {
            hide(card);
            console.log(err);
        });
});