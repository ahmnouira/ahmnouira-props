import { ClickProps } from "./click-props";
import { DisabledProps } from "./disabled-props";
import { TitleProps } from "./title-props";

export type ButtonProps = DisabledProps & TitleProps & ClickProps;
