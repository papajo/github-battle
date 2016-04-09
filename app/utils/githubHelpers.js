var axios = require('axios');
var secret = require('../config/secret.js');
var param = "?client_id=" + secret.id + "&client_secret=" + secret.sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}
var helpers = {
    getPlayersInfo: function(players){
        return axios.all(players.map(function(username) {
            return getUserInfo(username)
        }))
        .then(function (info){
            return info.map(function (user) {
              return user.data;
            })
          }).catch(function(err){
            console.warn('Error in getPlayersInfo', err)
          })
    }

};

module.exports = helpers;
