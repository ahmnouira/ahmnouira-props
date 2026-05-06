import type {
  ButtonProps,
  DialogProps,
  MenuListProps,
  Role,
  Status,
  User,
  ValueChangeProps,
} from "@ahmnouira/props";

type UserFormProps = ValueChangeProps<string> & {
  label: string;
};

function handleInput(props: UserFormProps) {
  props.onChange?.((props.value ?? "").trim());
}

type ConfirmDeleteDialogProps = DialogProps<boolean> & ButtonProps;

function handleDialog(props: ConfirmDeleteDialogProps) {
  props.onClick?.();
  props.onChange(!props.value);
}

type UserMenuProps = MenuListProps<User, User["id"]>;

function selectFirstUser(props: UserMenuProps) {
  const firstUser = props.list?.[0];
  if (!firstUser) return;

  props.onClick?.(firstUser);
}

const userRole: Role = "admin";
const userStatus: Status = "online";

const currentUser: User = {
  id: "user_1",
  role: userRole,
  status: userStatus,
  verified: true,
};

handleInput({
  label: "Name",
  value: "Ahmed",
  onChange: (value) => console.log("updated:", value),
});

handleDialog({
  value: false,
  title: "Delete User",
  onClick: () => console.log("confirm click"),
  onClose: () => console.log("dialog closed"),
  onChange: (value) => console.log("dialog value:", value),
});

selectFirstUser({
  list: [currentUser],
  selected: currentUser.id,
  onClick: (user) => console.log("selected user:", user.id),
});
