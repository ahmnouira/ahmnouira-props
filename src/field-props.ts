import { ErrorsProps } from "./errors-props";
import { LoadingProps } from "./loading-props";
import { ValueProps } from "./value-props";

export type FieldProps = LoadingProps &
  ErrorsProps &
  ValueProps & {
    shake?: boolean;
    props?: any;
  };
