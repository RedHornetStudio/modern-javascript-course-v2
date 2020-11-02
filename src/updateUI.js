const updateUI = (data, details, weatherIcon, daytimePicture) => {
    // update details text
    const cityData = data.cityData;
    const weatherData = data.weatherData;
    details.children[0].textContent = cityData.EnglishName;
    details.children[1].textContent = weatherData.WeatherText;
    details.children[2].children[0].textContent = weatherData.Temperature.Metric.Value;

    // update daytime picture
    if(data.weatherData.IsDayTime) {
        daytimePicture.setAttribute('src', 'assets/img/day.svg');
    } else {
        daytimePicture.setAttribute('src', 'assets/img/night.svg');
    }

    // update weather icon
    weatherIcon.setAttribute('src', `assets/img/icons/${data.weatherData.WeatherIcon}.svg`);
};

const hide = elem => {
    if(!elem.classList.contains('d-none')) {
        elem.classList.add('d-none');
    }
};

const show = elem => {
    if(elem.classList.contains('d-none')) {
        elem.classList.remove('d-none');
    }
};

export { updateUI as default, hide, show };