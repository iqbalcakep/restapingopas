const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManusiaSchema = new Schema({
    nama:{
        type:String
    },
    alamat:{
        type:String
    }
});

const Manusia = mongoose.model("manusia",ManusiaSchema);
module.exports = Manusia;