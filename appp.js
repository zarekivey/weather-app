// const yargs = require('yargs')
// const axios = require('axios')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to get the weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// let encodedAddress = encodeURIComponent(argv.address)
// let geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=FQsLgKmD6DKaglVWiMZs3KatJtHjR51z&location=${encodedAddress}`

// // axios parses the data and returns a promise
// axios.get(geocodeUrl).then((results) => {
//     if (!body.results[0].locations[0].adminArea5) {
//         throw new Error('Unable to find that address.');
//     }

//     let lat = body.results[0].locations[0].latLng.lat;
//     let lng = body.results[0].locations[0].latLng.lng;
//     let weatherURL = `https://api.darksky.net/forecast/2313c0cb86bf4ae1b21703528ad2dc4c/${lat},${lng}`
//     console.log(body.results[0].providedLocation.location);
//     return axios.get(weatherURL);
// }).then((response) => {
//     let temperature = response.data.currently.temperature;
//     let apparentTemperature = response.data.currently.apparentTemperature;
//     console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`)
// }).catch((e) => {
//         console.log(e.message)
// })