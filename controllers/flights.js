const Flight = require('../model/flight');

module.exports = {
    index,
}

function index (req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    });
}