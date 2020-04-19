const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



// create a contact schema & model 
const ContactSchema = new Schema({

    name: {
        type: String,
        required: [true, 'name is required']        //attach a defalut message 
    },

    email: {
        type: String,
        required: [true, 'email is required']        //attach a defalut message 
    },

    content: String,

    updated_at: { type: Date, default: Date.now },
});


const Contact = mongoose.model('contact', ContactSchema);     //mongoose will make a collection of contact(s) and take Driver as a model to represent drivers collection in the db as DriverSchema.

module.exports = Contact;