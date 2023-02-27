require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const UserRouter = require("./routers/s_route");
const TechRouter = require("./routers/t_route");
const { requireAuth, checkUser } = require('./middleware/auth');
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());
app.use(UserRouter);


const cookiesparser = require("cookie-parser");

app.use(express.urlencoded({extended: false}));
app.use(cookiesparser());
app.use(cors());

app.use("/auth", UserRouter);
app.use("/teacher", TechRouter);



app.listen(port, () =>{
    console.log(`connecting is setup at ${port}`);
});