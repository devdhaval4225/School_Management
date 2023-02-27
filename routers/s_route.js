const router = require("express").Router();
const auth = require("../middleware/auth");

const {
    // Student
    studentRegis,
    studentLogin,
    studentEditid,
    studentgetid,
    studentget,
    studentFirst,
    studentStandard,
} = require("../controller/student_controller");


// Student
router.post("/student/regis", studentRegis);
router.post("/student/login", studentLogin);
router.patch("/student/edit/:id", studentEditid);
router.get("/student/view/:id", studentgetid);
router.get("/student/view", studentget);
router.get("/student/show1/:firstname", studentFirst);
router.get("/student/show2/:standard", studentStandard);
  

module.exports = router;    