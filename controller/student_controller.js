const jwt = require("jsonwebtoken");
const Stud = require("../models/student_model");


exports.studentRegis = async (req, res) => {
    const studentData = new Stud({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        fathername: req.body.fathername,
        fatherocc:req.body.fahterocc,
        mothername: req.body.mothername,
        motherocc:req.body. motherocc,
        standard:req.body.standard,
        class:req.body.class,
        email:req.body.email,
        password:req.body.password,
        fathermobile:req.body.fathermobile,
        address:req.body.address,
        zipcode:req.body.zipcode,
        firstinstallation:req.body.firstinstallation,
        secondinstallation:req.body.secondinstallation
      
    });

    try {
        const saveData = await studentData.save();
        res.status(201).json({
            message: "Student Data Registed",
            status: 201,
            data: saveData,
        })

    } catch (error) {
        console.log("Student:", error);
        res.status(400).json({
            message: "Something Went Wrong",
            status: 400 
        })
    }
};

exports.studentLogin = async (req, res) => {
    try {
        try {
            const {email, password} = req.body;
            const data = await Stud.findOne({email});
    
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
    } catch (error) {
        console.log("Error::",error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.studentEditid = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Stud.findByIdAndUpdate({ _id },
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    fathername: req.body.fathernamename,
                    fatherocc:req.body.fahterocc,
                    mothername: req.body.mothernamename,
                    motherocc:req.body. motherocc,
                    standard:req.body.standard,
                    class:req.body.class,
                    email:req.body.email,
                    password:req.body.password,
                    fathermobile:req.body.fathermobile,
                    address:req.body.address,
                    zipcode:req.body.zipcode,
                    firstinstallation:req.body.firstinstallation,
                    secondinstallation:req.body.secondinstallation
                }
            }
        )
        .then(() => {
            res.status(200).json({
                message: "Update Student Profile Successfully",
                status: 200,
                data:data
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: "Something Went wrong",
                status: 500
            })
        })

    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.studentgetid = async (req, res) => {
    try {
        var _id = req.params.id;
        const data = await Stud.find({ _id });


        res.status(201).json({
            message: "View Student Data By Id",
            status: 201,
            info: data
        })

    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        });
    }
};

exports.studentget = async (req, res) => {
    try {
        const data = await Stud.find();

        res.status(201).json({
            message: "Get All Data",
            status: 201,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};

exports.studentFirst = async (req, res) => {
    try {
        var firstname = req.params.firstname;
        const data = await Stud.find({ firstname : firstname });


        res.status(201).json({
            message: "View All Student Data By firstname",
            status: 201,
            info: data
        })

    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        });
    }
};

exports.studentStandard = async (req, res) => {
    try {
        var standard = req.params.standard;
        const data = await Stud.find({standrad : standard });

        res.status(201).json({
            message: "View Student Data By Standard",
            status: 201,
            info:data
        })
    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500,
        });
    }
};
