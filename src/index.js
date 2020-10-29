import getWeather from './forecast';

const changeLocation = document.querySelector('.change-location');
const details = document.querySelector('.details');

changeLocation.addEventListener('submit', e => {
    e.preventDefault();

    getWeather(e.target.city.value)
        .then(data => {
            console.log(data);
            if(data) {
                changeLocation.reset();
            }
        }).catch(err => console.log(err));
});