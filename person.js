var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://waleed:123@cluster0.jh3ni.mongodb.net/test2?retryWrites=true&w=majority')
   

    var Scheme = mongoose.Schema;
    var personSchema = new mongoose.Schema({
        name : {type: String, required: true, unique: true },
        pass: String,
    });
    module.exports = mongoose.model('person', personSchema);