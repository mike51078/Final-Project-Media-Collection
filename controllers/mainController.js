const db = require('../models');

module.exports = {
	findAll: function(req, res) {
		db.Main.find(req.query).then((dbMain) => res.json(dbMain)).catch((err) => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.Main.findById(req.params.id).then((dbMain) => res.json(dbMain)).catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		db.Main.create(req.body).then((dbMain) => res.json(dbMain)).catch((err) => res.status(422).json(err));
	},
	update: function(req, res) {
		db.Main
			.findOneAndUpdate({ id: req.params.id }, req.body)
			.then((dbMain) => res.json(dbMain))
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Main
			.findById(req.params.id)
			.then((dbMain) => dbMain.remove())
			.then((dbMain) => res.json(dbMain))
			.catch((err) => res.status(422).json(err));
	}
};
