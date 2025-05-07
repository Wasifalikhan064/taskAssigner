const express = require("express");
const {adminOnly,protect}= require("../middlewares/authMiddleware.js");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController.js");
const router=express.Router();

router.get("/",protect,adminOnly,getUsers)
router.get("/:id",protect,getUserById);


module.exports=router;
