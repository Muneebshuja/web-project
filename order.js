var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://waleed:123@cluster0.jh3ni.mongodb.net/order?retryWrites=true&w=majority')
   

    var Scheme = mongoose.Schema;
    var orderSchema = new mongoose.Schema({
        name : String,
        email:String,
        address:String,
        pass: String,
    });
    module.exports = mongoose.model('order', orderSchema);