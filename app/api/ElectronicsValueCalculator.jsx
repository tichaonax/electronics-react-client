var axios = require('axios');

const ELECTRONIC_VALUE_CALCULATOR_URL = 'http://localhost:8058';

module.exports = {
    getOhmValue: function (bandAColor, bandBColor, bandCColor, bandDColor) {
        var requestUrl = `${ELECTRONIC_VALUE_CALCULATOR_URL}/ohms/${bandAColor}/${bandBColor}/${bandCColor}/${bandDColor}`;

        return axios.get(requestUrl).then(function (resp) {
            console.log(resp);
            return resp.data;
        }, function (resp){
            throw new Error(resp.response.data.message);
        })
    }
}