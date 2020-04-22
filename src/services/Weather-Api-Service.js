class WeatherAPIService {
    async fetchWeather(url, apiKey, query) {
        let response = await fetch(`${url}weather?q=${query}&units=metric&APPID=${apiKey}`);
        let json = await response.json();
        return await json;
    }
}
export default new WeatherAPIService();