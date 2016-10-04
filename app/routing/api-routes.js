var friendData = require("../data/friends.js");

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });


   
};


//still need to do the logic to find the difference to find out who would be the best compatibale friend.