// Function is used in the case that no location is given

const axios = require('axios');

module.exports = async () => {
    const results = await axios({
        method: 'get',
        url: 'https://api.ipdata.co?api-key=848b4c35b856c28491e95a238cdb610905150917e1045516be556046',

    });
    const {city, region} = results.data;
    return `${city}, ${region}`;
}
