const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// create a driver schema & model 
const DriverSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is required']        //attach a defalut message 
    },

    rank: String,

    available:{
        type: Boolean,
        default: false
    },

    geometry: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
            
        }
    }

});


const Driver = mongoose.model('driver', DriverSchema);     //mongoose will make a collection of driver(s) and take Driver as a model to represent drivers collection in the db as DriverSchema.

module.exports = Driver;