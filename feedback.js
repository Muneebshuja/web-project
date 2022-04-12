var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://waleed:123@cluster0.jh3ni.mongodb.net/sugg?retryWrites=true&w=majority')
   

    var Scheme = mongoose.Schema;
    var suggessionSchema = new mongoose.Schema({
       
        sugg: String,
    });
    module.exports = mongoose.model('suggession', suggessionSchema);