import { SaveProps } from "./save-props";
import { ValueProps } from "./value-props";

export type SaveValueProp<V, S = V> = ValueProps<V> & SaveProps<S>;
