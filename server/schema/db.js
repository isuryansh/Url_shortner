const mongoose = require('mongoose');
const {nanoid} = require('nanoid');

mongoose.connect('mongodb+srv://suryanshvaish6:GZwJOyjVy97hgafZ@cluster0.esx5lly.mongodb.net/Url_Shortner')

const shortUrlSchema =new mongoose.Schema({
    fullUrl : {
        type: String,
        required: true
    },
    shortUrl : {
        type : String,
        required : true,
        default : () =>  nanoid().substring(0,8),
    },
    click : {
        type : Number,
        default : 0
    }
},{
    timestamps : true
})

const Url = mongoose.model("Url", shortUrlSchema);

module.exports = Url;