import { useState } from "react";
import type { DialogProps, Role, Status, User } from "@ahmnouira/props";

type ConfirmDialogProps = DialogProps<boolean> & {
  title: string;
};

function ConfirmDialog({ title, value, onClose, onChange }: ConfirmDialogProps) {
  if (!value) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}
    >
      <h3>{title}</h3>
      <p>This action cannot be undone.</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => onChange(false)}>Cancel</button>
        <button
          onClick={() => {
            console.log("confirmed");
            onClose?.();
            onChange(false);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);

  const role: Role = "admin";
  const status: Status = "online";

  const currentUser: User = {
    id: "user_1",
    role,
    status,
    verified: true,
  };

  return (
    <main style={{ display: "grid", gap: 16, maxWidth: 560, margin: "2rem auto" }}>
      <h1>Next.js + @ahmnouira/props</h1>
      <p>
        Logged user: <strong>{currentUser.id}</strong> ({currentUser.role} /{" "}
        {currentUser.status})
      </p>

      <button onClick={() => setOpen(true)}>Delete account</button>

      <ConfirmDialog
        title="Confirm deletion"
        value={open}
        onClose={() => setOpen(false)}
        onChange={setOpen}
      />
    </main>
  );
}
