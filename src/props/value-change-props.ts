import { ChangeProps } from "./change.props";
import { ValueProps } from "./value-props";

export type ValueChangeProps<T = string> = ValueProps<T> & ChangeProps<T>;
