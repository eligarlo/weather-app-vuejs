class WeatherAPIService {
    async fetchWeather(query) {
        let response = await fetch(`/.netlify/functions/get-weather?city=${query}`);
        let json = await response.json();
        return await json;
    }
}
export default new WeatherAPIService();