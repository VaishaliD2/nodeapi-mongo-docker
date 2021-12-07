'use strict';

module.exports = function(app) {

	const drugHandler = require('../controllers/drugs.controller');

   // drug routes
    app.route('/drugs/:searchTerm').get(drugHandler.find);
	
  };