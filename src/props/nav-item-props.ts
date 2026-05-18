import { SelectProps } from "./select-props";

export type NavItemProps<T = string> = SelectProps<T> & {
  href?: string;
  title?: T;
  pathname?: string;
};
