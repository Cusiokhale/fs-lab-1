import { organizationRepository } from "../repositories/organization.repositroy";

export const organizationService = {
  getRoles() {
    return organizationRepository.getRoles();
  },
};