const updateDaytimePicture = (data, elem) => {
    if(data.weatherData.IsDayTime) {
        elem.setAttribute('src', 'assets/img/day.svg');
    } else {
        elem.setAttribute('src', 'assets/img/night.svg');
    }
};

export { updateDaytimePicture as default };