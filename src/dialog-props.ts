import { CloseProps } from "./close.props";

export type DialogProps<T = string> = CloseProps & {
  onChange: (value: T) => void;
  value: T;
};
