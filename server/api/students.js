const router = require("express").Router();
const { Student } = require("../db");

//GET api/students
router.get("/", async (req, res, next) => {
  try {
    let students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

//GET api/students/:studentId
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    res.json(student);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/students/:studenId
router.delete("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    await student.destroy();
    res.send(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
