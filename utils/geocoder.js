const NodeGeocoder = require('node-geocoder')

var options = {
    provider: 'mapquest',
    httpAdapter : 'https',
    apiKey : 'Eejd23zpt0DG4AbMApT7wSttFECjI8fF',
    formatter : null
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder