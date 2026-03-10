import { Router } from "express";
import { organizationController } from "../controllers/organization.controller";

const router = Router();

router.get("/roles", organizationController.getRoles);

export default router;