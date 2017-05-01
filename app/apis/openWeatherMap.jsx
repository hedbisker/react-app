var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=86ec52afecf5fe383b480c8c7ab62a1f';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = OPEN_WEATHER_URL+"&q="+location;
        return axios.get(requestUrl).then(function(res){
            debugger;
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        },function (res) {
            throw new Error(res.data.message);
        })

    }
};