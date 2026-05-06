import { ClickValueProps } from "./click-value.props";
import { ListProps } from "./list-props";
import { SelectedProps } from "./selected-props";

export type MenuListProps<T = Object, V = string> = ListProps<T> &
  ClickValueProps<T> &
  SelectedProps<V>;
