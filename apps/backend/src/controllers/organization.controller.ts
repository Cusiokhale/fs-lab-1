import type { Request, Response } from "express";
import { organizationService } from "../services/organization.service";

export const organizationController = {
  getRoles(req: Request, res: Response) {
    const roles = organizationService.getRoles();
    res.json(roles);
  },
};