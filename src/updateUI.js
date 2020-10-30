const updateUI = (data, details) => {
    const cityData = data.cityData;
    const weatherData = data.weatherData;
    details.children[0].textContent = cityData.EnglishName;
    details.children[1].textContent = weatherData.WeatherText;
    details.children[2].children[0].textContent = weatherData.Temperature.Metric.Value;
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