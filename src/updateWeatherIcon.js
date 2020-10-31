const updateWeaherIcon = (data, elem) => {
    elem.setAttribute('src', `assets/img/icons/${data.weatherData.WeatherIcon}.svg`);
};

export { updateWeaherIcon as default };