const request = require('request');

forecast = ({latitude, longitude}, callback) => {

    const URL = `http://api.weatherstack.com/current?access_key=ac93c181cad69de3f964363367a7b0c0&query=${latitude},${longitude}&units=m`;

    request({url: URL, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather servie', undefined);
        }
        else if(response.body.error){
            callback('Unable to find location.', undefined);
        }
        else{

            let current = response.body.current;
            callback(undefined, `${current.weather_descriptions}. Its currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`);
        }

    });

}

module.exports = forecast;

