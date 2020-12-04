const Ticket = require('../model/ticket');
const Flight = require('../model/flight');

module.exports = {
  new: newTicket,
  create,
}

function newTicket(req, res) {
    res.render('tickets/new', {
      title: 'New Ticket',
      id: req.params.id,
    });
};

function create(req, res) {
  req.body.flight = req.params.id;
  console.log(req.body);
  Ticket.create(req.body, function(err) {
    res.redirect(`/flights/${req.params.id}`);
  });
};