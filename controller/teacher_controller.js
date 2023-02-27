const jwt = require("jsonwebtoken");
const Tech = require("../models/teacher_model");


exports.teacherRegis = async (req,res) =>{
    const techerData = new Tech({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile,
        degree:req.body.degree,
        subject:req.body.subject,
        address:req.body.address,
        zipcode:req.body.zipcode,    
        class:req.body.class,
        salary:req.body.salary
    });

    try {
        const saveData = await techerData.save();
        res.status(201).json({
            message:"Techer Data Registed",
            status: 201,
            data: saveData
        })
    } catch (error) {
        console.log("Student:", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.teacherLogin = async(req, res) =>{
    try {
        const {email, password} = req.body;
        const data = await Tech.findOne({email});

        if(!data){
            return res.send("Invalid Email");
        }
        if(data.password !== password){
            return res.send("Invalid Password");
        }
        res.send("Login Successfully");
    } catch (error) {
        console.log("Error::",error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.teacherEditid = async(req, res) =>{
    try {
        const _id = req.params.id;
        const data = await Tech.findByIdAndUpdate({ _id },
            {
                $set:{
                    firstname:req.body.firstname,
                    lastname: req.body.lastname,
                    email:req.body.email,
                    password:req.body.password,
                    mobile:req.body.mobile,
                    degree:req.body.degree,
                    subject:req.body.subject,
                    address:req.body.address,
                    zipcode:req.body.zipcode,    
                    class:req.body.class,
                    salary:req.body.salary
                }
            }
        )
        .then(() =>{
            res.status(200).json({
                message:"Update Student Profile Successfully",
                status:200,
                info: data
            })
        })
        .catch((err) =>{
        console.log("Error::", err);
            res.status(500).json({
                message:"Error Update",
                status:500
            })
        })
    } catch (error) {
        res.status(500).json({
            message:"Something Went Wrong",
            status:500
        })
    }
}

exports.teachergetid = async(req, res) =>{
    try {
        const _id = req.params.id;
        const data = await Tech.findById({_id });
        res.status(201).json({
            message:"View Teacher Data By Id",
            status:201,
            info:{
                id: data[0]._id,
                firstname: data[0].firstname,
                lastname: data[0].lastname,
                email: data[0].email,
                password: data[0].password,
                mobile: data[0].mobile,
                degree: data[0].degree,
                subject: data[0].subject,
                address: data[0].address,
                zipcode: data[0].zipcode,
                class: data[0].class,
                salary: data[0].salary
            }
    })
    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        });
    }
}

exports.teacherget = async(req, res) =>{
    try {
        const data = await Tech.find();

        res.status(201).json({
            message: " All Teacher Data",
            status: 201,
            data: data
        })
    } catch (error) {
        console.log("All Teacher:-", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.teacherDegree = async(req, res) =>{
    try {
        const degree = req.params.degree;
        const data = await Tech.find({degree : degree });
        res.status(201).json({
            message:"View Teacher Data By Degree",
            status:201,
            info:data
    })
    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        });
    }
}

exports.teacherClass = async(req, res) =>{
    try {
        const Class = req.params.class;
        const data = await Tech.find({ class: Class});
        res.status(201).json({
            message:"View All Teacher Data By Class",
            status:201,
            info:data
    })
} catch (error) {
        console.log("Error--", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        });
    }
}

exports.teacherFirst = async(req, res) =>{
    try {
        const firstname = req.params.firstname;
        const data = await Tech.find({firstname : firstname});
        res.status(201).json({
            message:"View Teacher Data By Firstname",
            status:201,
            info:data
    })
    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        });
    }
}

