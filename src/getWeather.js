const apiKey = 'ekjpkvFUGdF6j29WMEc0QAcNjNKkJbHz';

const getWeather = async city => {

    const data = {};

    // get array of matching cities
    const cityResourceURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const  cityQueryParametrs = `?apikey=${apiKey}&q=${city}`;

    const cityResponse = await fetch(cityResourceURL + cityQueryParametrs);

    if(cityResponse.status !== 200) {
        throw new Error(`Cannot fetch the city data. Status ${cityResponse.status}`);
    }

    const cityData = await cityResponse.json();
    data.cityData = cityData[0]

    if(cityData === undefined || cityData.length == 0) {
        console.log('no such city');
        return null;
    }

    // get weather information for the best match city (city first in array)
    const weatherResourceURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const  weatherQueryParametrs = `${cityData[0].Key}?apikey=${apiKey}`;

    const weatherResponse = await fetch(weatherResourceURL + weatherQueryParametrs);

    if(weatherResponse.status !== 200) {
        throw new Error(`Cannot fetch the weather data. Status ${weatherResponse.status}`);
    }

    const weatherData = await weatherResponse.json();
    data.weatherData = weatherData[0];

    return data;
};
    
export { getWeather as default };