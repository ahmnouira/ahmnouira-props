import { Role } from "../models/role";

export type RoleProps<T = Role> = {
  role?: T;
};
