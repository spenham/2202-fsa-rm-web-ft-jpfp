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

//POST api/campuses/
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/campuses/:campusId
router.delete("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
