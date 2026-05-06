import { ChangeSProps } from "./change-s.props";
import { FieldProps } from "./field-props";
import { LabelProps } from "./label-props";
import { PlaceholderProps } from "./placeholder-props";

export type FieldChangeProps = ChangeSProps &
  FieldProps &
  LabelProps &
  PlaceholderProps;
