var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var addressSchema = new Schema({
    address: String
});


module.exports = mongoose.model('address', addressSchema);