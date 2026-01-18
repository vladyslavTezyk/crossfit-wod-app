import express from "express";
import memberController from "../../controllers/memberController.js";

const router = express.Router();

router.get("/", memberController.getAllMembers);

router.get("/:memberId", memberController.getOneMember);

router.patch("/:memberId", memberController.updateOneMember);

router.delete("/:memberId", memberController.deleteOneMember);

export default router;
