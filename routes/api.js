const express = require ('express');
const router = express.Router();
const Driver = require ('../models/driver');
const Contact = require ('../models/contacts');



//get a list of drivers from the db
router.get('/drivers', function(req, res){

    Driver.find({"geometry.coordinates": [parseFloat(req.query.lat), parseFloat(req.query.lng)]}).then(function(data){         
        res.send(data)
    });
});



router.get('/drivers-list', function(req, res){

    Driver.find({}).then(function(data){         
        res.send(data)
    });
});


//add a new driver to the db
router.post('/drivers', function(req, res){
    Driver.create(req.body).then(function(data){
        res.send(data);
    });                                                                       
});


//post a new contact to the db
router.post('/contact', function(req, res){
    Contact.create(req.body).then(function(data){

        res.send(data);
    });                                                                       
});





//update a certain driver in the db
router.put('/drivers/:id', function(req, res){
    Driver.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Driver.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        })
    })
});



//delete a certain driver in the db
router.delete('/drivers/:id', function(req, res){
    Driver.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    })
});


module.exports = router;