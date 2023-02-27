const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Students")
    .then(() => {
        console.log("connection is successful.");
    })
    .catch((error) => {
        console.log("No Connection");
    })