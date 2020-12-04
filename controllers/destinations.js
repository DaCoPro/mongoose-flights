//require the model from flight
const Flight = require('../model/flight');

//export the create function
module.exports = {
    create
};

//write a function that will create a flight destination and
//arrival time based on form submitted from show page
 function create (req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            console.log(err);
            if (err) return res.render('flights/new');
            res.redirect(`/flights/${flight._id}`)
        });
    });
}