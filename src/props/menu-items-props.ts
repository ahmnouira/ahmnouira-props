import { ChangeProps } from "./change.props";
import { LoadingProps } from "./loading-props";
import { MenuListProps } from "./menu-list-props";
import { ShowProps } from "./show-props";
import { ValueProps } from "./value-props";

export type MenuItemsProps = MenuListProps &
  ChangeProps &
  ValueProps &
  ShowProps &
  LoadingProps & {};
