import { Entity } from "./entity";

export type UserEntity = Entity & {
  email: string;
  name?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
};
