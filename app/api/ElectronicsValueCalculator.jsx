var axios = require('axios');

const ELECTRONIC_VALUE_CALCULATOR_URL = 'http://localhost:8058';
const INVALID_COLOR_CODE_COMBINATION ="Invalid color code combination";

module.exports = {
    getOhmValue: function (bandAColor, bandBColor, bandCColor, bandDColor) {

        var requestUrl = `${ELECTRONIC_VALUE_CALCULATOR_URL}/ohms/${bandAColor}/${bandBColor}/${bandCColor}/${bandDColor}`;
        return axios.get(requestUrl).then((resp)=> {
            console.log(resp);
            return resp.data;
        }, (error)=>{
            console.log("API Error", JSON.stringify(error));
            let errData=error.response.data;
            if(errData.details.search(INVALID_COLOR_CODE_COMBINATION)>0){
                throw new Error(INVALID_COLOR_CODE_COMBINATION);
            }else{
                throw new Error(errData.message);
            }
        })
    }
}