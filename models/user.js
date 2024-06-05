var mongoose= require("mongoose");

//Write your schema here with name of schema as userSchema

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 25,
        unique: [true, "User name should be Unique"],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email should be Unique"],
        min: 5,
        max: 55,
    },
    pswd: {
        type: String,
        required: true,
        nin: 6,
        max: 25,
    },
    role: {
        type: String,
        required: true,
    },
    
},{timestamps : true});

module.exports =mongoose.model("users",userSchema);