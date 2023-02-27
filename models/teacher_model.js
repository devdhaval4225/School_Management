require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const teacherSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    degree:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    zipcode:{
        type:String,
        require:true
    },
    class:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]   

});

teacherSchema.methods.generateautoken = async function(){
    try {
        const token = jwt.sign({ _id:this._id.toString() }, process.env.LOGI_KEY );
        this.token = this.token.concat({token : token})
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Tech = new mongoose.model("Tech",teacherSchema);

module.exports = Tech;
