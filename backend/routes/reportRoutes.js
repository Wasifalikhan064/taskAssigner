const express = require("express");
const {protect, adminOnly}= require("../middlewares/authMiddleware.js");
const { exportTaskReport, exportUserReport } = require("../controllers/reportController.js");

const router= express.Router()

router.get("/export/tasks",protect,adminOnly, exportTaskReport);
router.get("/export/users",protect, adminOnly,exportUserReport);



module.exports = router;