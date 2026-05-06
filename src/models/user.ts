import { Role } from "./role";
import { Status } from "./status";
import { UserEntity } from "./user-entity";

export type User = UserEntity & {
  role?: Role;
  status?: Status;
  address?: string;
  company?: string;
  description?: string;
  phone?: string;
  profession?: string;
  verified?: boolean;
};
