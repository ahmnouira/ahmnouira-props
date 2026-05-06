import { ClassNameProps } from "./classname-props";
import { ClickProps } from "./click-props";
import { SizeProps } from "./size-props";
import { TitleProps } from "./title-props";

export type IconButtonProps = SizeProps &
  ClickProps &
  ClassNameProps &
  TitleProps;
