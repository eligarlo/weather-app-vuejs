const axios = require('axios')

exports.handler = async function (event) {
    // Get env var values defined in our Netlify site UI
    const { VUE_APP_WEATHER_API_KEY, VUE_APP_WEATHER_URL } = process.env
    // Get parameter from input user
    const query = event.queryStringParameters.city || 'Madrid';
    // Build the API url
    const URL = `${VUE_APP_WEATHER_URL}weather?q=${query}&units=metric&APPID=${VUE_APP_WEATHER_API_KEY}`

    try {
        const { data } = await axios.get(URL, { headers: { Accept: "application/json" } })
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        const { status, statusText, headers, data } = error.response
        return {
            statusCode: error.response.status,
            body: JSON.stringify({ status, statusText, headers, data }),
        }
    }
}
