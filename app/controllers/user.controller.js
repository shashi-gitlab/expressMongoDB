const User = require('../models/user.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

	// create user
	const user = new User({
		user_fname: req.body.user_fname,
		user_lname: req.body.user_lname,
		user_email: req.body.user_email ,
		user_mobile: req.body.user_mobile,
		user_address: req.body.user_address,
		user_city: req.body.user_city,
		user_state: req.body.user_state ,
		user_country: req.body.user_country,
		user_zipcode: req.body.user_zipcode
	});
	
	// save user
	user.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
	});
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
	});
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.userId
        });
    });
};

// update user findById
exports.update = (req, res) => {
	if(!req.body)
	{
		return res.status(404).send({
			message: "User field should not empty"
		});
	}
	User.findByIdAndUpdate(req.params.userId, {
		user_fname: req.body.user_fname,
		user_lname: req.body.user_lname,
		user_email: req.body.user_email ,
		user_mobile: req.body.user_mobile,
		user_address: req.body.user_address,
		user_city: req.body.user_city,
		user_state: req.body.user_state ,
		user_country: req.body.user_country,
		user_zipcode: req.body.user_zipcode
	}, {new: true})
	.then(data =>{
		if(!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(data);
	}).catch(err =>{
		if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.userId
        });
	});
}

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete User with id " + req.params.userId
        });
    });
};