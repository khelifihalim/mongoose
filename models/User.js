const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{type:String,required:true},
    age:{type:Number,min:0},
    favoriteFood:[String]
})

const User = mongoose.model('User',userSchema);
module.exports = User;