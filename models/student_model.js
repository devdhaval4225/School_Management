require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
    
const studentSchema = new mongoose.Schema({
   firstname:{
    type:String,
    required:true
   },
   lastname:{
    type:String,
    required:true
   },
   fathername:{
    type:String,
    require:true
   },
   fatherocc:{
    type:String,
    require:true
   },
   mothername:{
    type:String,
    require:true
   },
   motherocc:{
    type:String,
    require:true
   },
   standard:{
    type:String,
    require:true
   },
   class:{
    type:Number,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   fathermobile:{
    type:Number,
    require:true
   },
   address:{
    type:String,
    required:true
   },
   zipcode:{
    type:Number,
    required:true
   },
   firstinstallation:{
    type:Number,
    enum:[1,0]
   },
   secondinstallation:{
    type:Number
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



studentSchema.methods.generateautoken = async function(){
    try {
        const token = jwt.sign({ _id:this._id.toString() }, process.env.LOGI_KEY );
        this.token = this.token.concat({token : token})
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}


const Stud = new mongoose.model("Stud",studentSchema);

module.exports = Stud; 







































// tokens: [
//     {
//         token: {
//             type: String,
//             required: true,
//         }
//     }
// ]