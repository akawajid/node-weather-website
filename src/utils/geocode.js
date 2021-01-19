const request = require('request');

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGVsbDQwNTAiLCJhIjoiY2tqcmZ0MWxpMHJmZzMzanhueTR6aTJvMiJ9.Kmu6590N1VLGhn7qnj0wpQ&limit=1';

    request({url:geocodeUrl, json:true},(error, response) => {
        if(error){
            callback('Unable to connect to location service.', undefined);
        }
        else if(response.body.features.length < 1){
            callback('Unable to find coordinates. Try another search.', undefined);
        }
        else{
            const location = response.body.features[0];
            callback(undefined, {
                latittude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            });
        }
    });
}

module.exports = geocode;