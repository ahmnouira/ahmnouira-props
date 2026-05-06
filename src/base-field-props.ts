import { ErrorsProps } from "./errors-props";
import { NameProps } from "./name-props";

export type BaseFieldProps = NameProps &
  ErrorsProps & {
    mb?: boolean;
  };
