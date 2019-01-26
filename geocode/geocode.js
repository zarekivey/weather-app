const request = require('request')

const _ = require('lodash')
const mapQuestQualityCodes = ['P1', 'L1', 'I1', 'B1', 'B2', 'B3', 'A4', 'A5', 'A6', 'Z1', 'Z1', 'Z3', 'Z4'];


const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address)

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=FQsLgKmD6DKaglVWiMZs3KatJtHjR51z&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        const qualityCode = body.results[0].locations[0].geocodeQualityCode;
            if(error) {
                callback('Unable to connect to MapQuest servers')
            } else if(_.indexOf(mapQuestQualityCodes, qualityCode.substring(0,2)) == -1){
                callback('Error: Location not found or too general');
            } else {
                callback(undefined, {
                    address: `${body.results[0].providedLocation.location}`,
                    latitude: `${JSON.stringify(body.results[0].locations[0].latLng.lat)}`,
                    longitude: `${JSON.stringify(body.results[0].locations[0].latLng.lng)}` 
                })
            };
    })
}

module.exports.geocodeAddress = geocodeAddress
