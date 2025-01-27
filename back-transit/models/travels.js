const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    type :
    {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    dateRange : {
        type : Date,
        required : true

    }
});


module.exports = mongoose.model("travel", travelSchema);