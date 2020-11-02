const setDefaultCityInLocalStorage = data => {
    localStorage.setItem('defaultCity', data.cityData.EnglishName);
};

const getDefaultCityFromLocalStorage = () => {
    return localStorage.getItem('defaultCity');
};

export { setDefaultCityInLocalStorage, getDefaultCityFromLocalStorage };