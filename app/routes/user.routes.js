module.exports = (app) => {
	const user = require('../controllers/user.controller.js');

	// create a new user
	app.post('/users', user.create);

	 // Retrieve all Users
    app.get('/users', user.findAll);

    // Retrieve a single User with userId
    app.get('/users/:userId', user.findOne);

    // Update a Note with userId
    app.put('/users/:userId', user.update);

    // Delete a user with userId
    app.delete('/users/:userId', user.delete);

};