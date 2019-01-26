const request = require('request')

const getWeather = (lat, lng, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/2313c0cb86bf4ae1b21703528ad2dc4c/${lat},${lng}`,
        json: true 
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback('Unable to fetch weather (error).')
        }
    });
};

module.exports.getWeather = getWeather;