import { useState } from "react";
import type {
  ButtonProps,
  MenuListProps,
  User,
  ValueChangeProps,
} from "@ahmnouira/props";

type NameInputProps = ValueChangeProps<string> & {
  label: string;
};

function NameInput({ label, value = "", onChange }: NameInputProps) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span>{label}</span>
      <input
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder="Type a name"
      />
    </label>
  );
}

function PrimaryButton({ title, onClick, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {title ?? "Submit"}
    </button>
  );
}

type UserMenuProps = MenuListProps<User, User["id"]> & {
  onSelect?: (user: User) => void;
};

function UserMenu({ list = [], selected, onSelect }: UserMenuProps) {
  return (
    <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 6 }}>
      {list.map((user) => (
        <li key={user.id}>
          <button
            onClick={() => onSelect?.(user)}
            style={{ fontWeight: selected === user.id ? "bold" : "normal" }}
          >
            {user.id}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function ReactPropsExample() {
  const [name, setName] = useState("Ahmed");
  const [selectedId, setSelectedId] = useState<User["id"]>("user_1");

  const users: User[] = [
    { id: "user_1", role: "admin", status: "online", verified: true },
    { id: "user_2", role: "user", status: "busy" },
  ];

  return (
    <section style={{ display: "grid", gap: 16, maxWidth: 360 }}>
      <h2>React Example</h2>

      <NameInput label="Name" value={name} onChange={setName} />

      <PrimaryButton
        title="Save"
        onClick={() => console.log("Saving:", name)}
        disabled={!name.trim()}
      />

      <UserMenu
        list={users}
        selected={selectedId}
        onSelect={(user) => setSelectedId(user.id)}
      />
    </section>
  );
}
