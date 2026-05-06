import { ChangeProps } from "./change.props";
import { TitleProps } from "./title-props";

export type CheckboxProps = ChangeProps &
  TitleProps & {
    checked: boolean;
  };
