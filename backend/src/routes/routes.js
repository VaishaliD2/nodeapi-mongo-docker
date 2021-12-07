'use strict';

module.exports = function(app) {

	const drugHandler = require('../controllers/drugsController');

   // drug routes
    app.route('/drugs/:searchTerm').get(drugHandler.find);
	
  };