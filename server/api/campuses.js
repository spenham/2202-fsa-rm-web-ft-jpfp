const router = require("express").Router();
const { Campus } = require("../db");

//GET api/campuses
router.get("/", async (req, res, next) => {
  try {
    let campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

//GET api/campuses/:campusId
router.get("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
