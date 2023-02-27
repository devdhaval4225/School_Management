const router = require("express").Router();
const auth = require("../middleware/auth");

const {
    // Teacher
    teacherRegis,
    teacherLogin,
    teacherEditid,
    teachergetid,
    teacherget,
    teacherDegree,
    teacherClass,
    teacherFirst
} = require("../controller/teacher_controller");

router.post("/regis", teacherRegis);
router.post("/login", teacherLogin);
router.patch("/edit/:id", teacherEditid);
router.get("/view/:id", teachergetid);
router.get("/view", teacherget);
router.get("/show/:class",teacherClass);
router.get("/show1/:degree",teacherDegree);
router.get("/show2/:firstname", teacherFirst);


module.exports = router;    
