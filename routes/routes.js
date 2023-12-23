const express = require("express");
const controller = require("../controller/controller.js");
const router = express.Router();  

router.post("/add", controller.assignmentCreate);
router.get("/getall", controller.getAllAssignment);
router.get("/getById", controller.getAssignmentByID);
router.put("/updateAssignment", controller.updateAssignment);
router.delete("/deleteAssignment", controller.deleteAssignment);

module.exports = router;  
