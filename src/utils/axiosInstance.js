var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://exercise-kantek.local/api/v1/',

});

module.exports = axiosInstance;